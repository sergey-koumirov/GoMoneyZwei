package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"database/sql"
	"fmt"
	"time"

	"github.com/jinzhu/now"
)

// ReportsIndex - load reports
func ReportsIndex() structs.ViReports {

	prevD := 1
	prevM := time.Now().Month()
	prevY := time.Now().Year()

	sYear := now.New(time.Date(prevY-1, prevM, prevD, 0, 0, 0, 0, time.UTC))

	if prevM == 1 {
		prevM = 12
		prevY = prevY - 1
	} else {
		prevM = prevM - 1
	}

	pt := now.New(time.Date(prevY, prevM, prevD, 0, 0, 0, 0, time.UTC))

	var prevMonth time.Month
	if time.Now().Month() == 1 {
		prevMonth = time.December
	} else {
		prevMonth = time.Now().Month() - 1
	}

	return structs.ViReports{
		MoneyRests:     accountsRest("balance"),
		StocksRests:    accountsRest("stocks"),
		CurrentIncome:  incomeForPeriod(now.BeginningOfMonth().Format("2006-01-02"), now.EndOfMonth().Format("2006-01-02")),
		CurrentExpense: expenseForPeriod(now.BeginningOfMonth().Format("2006-01-02"), now.EndOfMonth().Format("2006-01-02")),

		PreviousIncome:  incomeForPeriod(pt.BeginningOfMonth().Format("2006-01-02"), pt.EndOfMonth().Format("2006-01-02")),
		PreviousExpense: expenseForPeriod(pt.BeginningOfMonth().Format("2006-01-02"), pt.EndOfMonth().Format("2006-01-02")),

		YearIncome:  incomeForPeriod(sYear.BeginningOfMonth().Format("2006-01-02"), now.EndOfMonth().Format("2006-01-02")),
		YearExpense: expenseForPeriod(sYear.BeginningOfMonth().Format("2006-01-02"), now.EndOfMonth().Format("2006-01-02")),

		CurrentDate:   time.Now().Format("2006-01-02"),
		CurrentMonth:  time.Now().Month().String(),
		PreviousMonth: prevMonth.String(),

		IOStats: inOutStatistics("stocks"),
	}
}

func expenseForPeriod(fromDate string, toDate string) map[string]structs.ViAccountsInfo {
	sql := `select a.id as AccountID,
	               a.name as AccountName,
		           c.code as CurrencyCode,
		           ifnull( (select sum(t.amount_to) from transactions t where t.account_to_id = a.id and t.dt >= ? and t.dt <= ?), 0) / 100.0 as Amount
		      from accounts a
		             left join currencies c on c.id = a.currency_id
		           where a.tag = "expense" and visible=1 
		    and Amount > 0
		  order by Amount desc`
	rows, error := db.DB.Raw(sql, fromDate, toDate).Rows()
	if error != nil {
		fmt.Println(error)
	}
	defer rows.Close()

	result := extract(rows)

	for i := range result {
		agg := float64(0)
		for index, record := range result[i].Records {
			result[i].Records[index].Percent = 100.0 * float64(record.Amount) / float64(result[i].Total)
			agg = agg + result[i].Records[index].Percent
			result[i].Records[index].SumPercent = agg
		}
	}

	return result
}

func incomeForPeriod(fromDate string, toDate string) map[string]structs.ViAccountsInfo {
	sql := `select a.id as AccountID,
	               a.name as AccountName,
		           c.code as CurrencyCode,
		           ifnull( (select sum(t.amount_from) from transactions t where t.account_from_id = a.id and t.dt >= ? and t.dt <= ?), 0) / 100.0 as Amount
		      from accounts a
		             left join currencies c on c.id = a.currency_id
		      where a.tag = "income" and visible = 1
		        and Amount > 0 
		      order by Amount desc`
	rows, e1 := db.DB.Raw(sql, fromDate, toDate).Rows()
	if e1 != nil {
		fmt.Println(e1)
	}
	defer rows.Close()

	return extract(rows)
}

func accountsRest(tag string) map[string]structs.ViAccountsInfo {
	rows, e1 := db.DB.Raw(
		`select a.id as AccountID,
		        a.name as AccountName,
		        c.code as CurrencyCode,
		        (ifnull((select sum(t2.amount_to) from transactions t2 where t2.account_to_id = a.id), 0) -
				  ifnull((select sum(t1.amount_from) from transactions t1 where t1.account_from_id = a.id), 0)) / 100.0 as Amount
			from accounts a
			       left join currencies c on c.id = a.currency_id
			where a.tag = ? and a.visible=1
			order by c.code, a.name`,
		tag,
	).Rows()
	if e1 != nil {
		fmt.Println(e1)
	}
	defer rows.Close()

	return extract(rows)
}

func extract(rows *sql.Rows) map[string]structs.ViAccountsInfo {

	result := map[string]structs.ViAccountsInfo{}

	for rows.Next() {
		item := structs.ViAccountRecord{}
		rows.Scan(&item.AccountID, &item.AccountName, &item.CurrencyCode, &item.Amount)

		v, ex := result[item.CurrencyCode]
		if !ex {
			v.Records = make([]structs.ViAccountRecord, 0)
		}
		v.Total = v.Total + item.Amount
		v.Records = append(v.Records, item)
		result[item.CurrencyCode] = v
	}

	return result
}

func inOutStatistics(tag string) []structs.ViAccountIORecord {
	incoming := incomingStatistics(tag)
	outcoming := outcomingStatistics(tag)

	accounts := make([]db.Account, 0)
	db.DB.Preload("Currency").Where("tag = ?", tag).Order("name").Find(&accounts)

	currencies := make([]db.Currency, 0)
	db.DB.Order("tag, code").Find(&currencies)

	result := make([]structs.ViAccountIORecord, len(accounts))

	for i, acc := range accounts {
		result[i].AccountID = acc.ID
		result[i].AccountName = acc.Name
		result[i].CurrencyCode = acc.Currency.Code
		result[i].Incoming = make([]structs.ViCurrencyIORecord, 0)
		result[i].Outcoming = make([]structs.ViCurrencyIORecord, 0)

		for _, cur := range currencies {
			inSt, exICode := incoming[cur.Code]
			if exICode {
				inAm, exIAcc := inSt[acc.ID]
				if exIAcc {
					result[i].Incoming = append(result[i].Incoming, structs.ViCurrencyIORecord{CurrencyCode: cur.Code, Amount: inAm})
				}
			}

			outSt, exOCode := outcoming[cur.Code]
			if exOCode {
				outAm, exOAcc := outSt[acc.ID]
				if exOAcc {
					result[i].Outcoming = append(result[i].Outcoming, structs.ViCurrencyIORecord{CurrencyCode: cur.Code, Amount: outAm})
				}
			}
		}

	}

	return result
}

func incomingStatistics(tag string) map[string]map[int64]float64 {
	rows, e1 := db.DB.Raw(
		`select a.id as AccountID, c_f.code as CurrencyCode, sum(t.amount_from) / 100.0 as Amount
		   from accounts a
			      inner join transactions t on t.account_to_id = a.id
			      inner join accounts a_f on a_f.id = t.account_from_id
			      inner join currencies c_f on c_f.id = a_f.currency_id
		   where a.tag = ? and a.visible=1
		   group by a.id, c_f.id`,
		tag,
	).Rows()

	if e1 != nil {
		fmt.Println(e1)
	}
	defer rows.Close()

	return extractStatistics(rows)
}

func outcomingStatistics(tag string) map[string]map[int64]float64 {
	rows, e1 := db.DB.Raw(
		`select a.id as AccountID, c_t.code as CurrencyCode, sum(t.amount_to) / 100.0 as Amount
			from accounts a
				inner join transactions t on t.account_from_id = a.id
				inner join accounts a_t on a_t.id = t.account_to_id
				inner join currencies c_t on c_t.id = a_t.currency_id
		 where a.tag = ? and a.visible=1
		 group by a.id, c_t.id`,
		tag,
	).Rows()

	if e1 != nil {
		fmt.Println(e1)
	}
	defer rows.Close()

	return extractStatistics(rows)
}

func extractStatistics(rows *sql.Rows) map[string]map[int64]float64 {

	result := make(map[string]map[int64]float64)

	for rows.Next() {
		var (
			accountID int64
			code      string
			amount    float64
		)
		rows.Scan(&accountID, &code, &amount)

		_, ex := result[code]
		if !ex {
			result[code] = make(map[int64]float64)
		}

		result[code][accountID] = amount
	}

	return result

}
