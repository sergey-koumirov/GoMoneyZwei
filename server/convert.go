package main

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/oldmodels"
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	fmt.Println("start")

	dbOld, _ := gorm.Open(sqlite.Open("./old.sqlite"), &gorm.Config{})

	dbNew, _ := gorm.Open(sqlite.Open("./gmz-dev.sqlite"), &gorm.Config{})

	// Delete NEW data
	dbNew.Exec("delete from transactions")
	dbNew.Exec("delete from templates")
	dbNew.Exec("delete from accounts")
	dbNew.Exec("delete from currencies")
	dbNew.Exec("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME in ('transactions','templates','accounts','currencies')")

	// Copy CURRENCIES
	currencyOld := make([]oldmodels.Currency, 0)
	dbOld.Order("id").Find(&currencyOld)

	currencyNew := make([]db.Currency, 0)
	dbNew.Find(&currencyNew)

	curHash := make(map[int64]int64)

	for _, oldR := range currencyOld {
		tag := "curr"
		if oldR.ID >= 5 {
			tag = "stock"
		}

		temp := db.Currency{
			Name: oldR.Code + " - " + oldR.Num,
			Code: oldR.Code,
			Tag:  tag,
		}

		dbNew.Create(&temp)
		curHash[oldR.ID] = temp.ID
	}

	// Copy ACCOUNTS
	accountOld := make([]oldmodels.Account, 0)
	dbOld.Order("id").Find(&accountOld)

	accountNew := make([]db.Account, 0)
	dbNew.Find(&accountNew)

	accHash := make(map[int64]int64)

	for _, oldR := range accountOld {
		visible := int64(1)
		if oldR.Hidden == 1 {
			visible = int64(0)
		}

		// "expense", "income", "balance", "stocks"
		tag := "expense"
		if oldR.Type == "I" {
			tag = "income"
		}
		if oldR.Type == "B" {
			if oldR.ID == 113 || oldR.ID == 114 || oldR.ID == 115 {
				tag = "stocks"
			} else {
				tag = "balance"
			}
		}

		if oldR.ID == 18 || oldR.ID == 16 {
			oldR.Name = oldR.Name + " - Д"
		}

		temp := db.Account{
			CurrencyID: curHash[oldR.CurrencyID],
			Name:       oldR.Name,
			Tag:        tag,
			Visible:    visible,
		}

		dbNew.Create(&temp)
		accHash[oldR.ID] = temp.ID
	}

	// Copy TEMPLATES
	tempOld := make([]oldmodels.Template, 0)
	dbOld.Order("id").Find(&tempOld)

	tempNew := make([]db.Template, 0)
	dbNew.Find(&tempNew)

	tempHash := make(map[int64]int64)

	for _, oldR := range tempOld {
		temp := db.Template{
			Description:   oldR.Title,
			AccountFromID: oldR.AccountFromID,
			AmountFrom:    oldR.AmountFrom,
			AccountToID:   oldR.AccountToID,
			AmountTo:      oldR.AmountTo,
		}

		dbNew.Create(&temp)
		tempHash[oldR.ID] = temp.ID
	}

	// Copy TRANSACTIONS
	trOld := make([]oldmodels.Transaction, 0)
	dbOld.Order("id").Find(&trOld)

	trNew := make([]db.Transaction, 0)
	dbNew.Find(&trNew)

	for _, r := range trOld {
		temp := db.Transaction{
			Description:   r.Comment,
			Dt:            r.Date,
			AccountFromID: r.AccountFromID,
			AmountFrom:    r.AmountFrom,
			AccountToID:   r.AccountToID,
			AmountTo:      r.AmountTo,
		}

		dbNew.Create(&temp)
	}

	fmt.Println("finish")
}
