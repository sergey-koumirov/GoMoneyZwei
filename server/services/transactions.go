package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"math"
	"strings"
	"time"
)

//TransactionsIndex - load transctions
func TransactionsIndex(page int, accFromID int, accToID int) ([]structs.ViTransaction, int64) {
	records := make([]db.Transaction, 0)

	scope := db.DB.
		Preload("AccountFrom.Currency").
		Preload("AccountTo.Currency").
		Order("dt desc, id desc").
		Limit(perPage).
		Offset((page - 1) * perPage)

	if accFromID > 0 {
		scope = scope.Where("account_from_id = ?", accFromID)
	}

	if accToID > 0 {
		scope = scope.Where("account_to_id = ?", accToID)
	}

	scope = scope.Find(&records)

	var count int64
	db.DB.Model(db.Transaction{}).Count(&count)

	pages := int64(math.Ceil(float64(count) / float64(perPage)))

	result := make([]structs.ViTransaction, len(records))

	for i, r := range records {
		result[i].CopyFrom(r)
	}

	return result, pages
}

//TransactionsCreate - create
func TransactionsCreate(params map[string]interface{}) (db.Transaction, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Transaction{}

	validateAndSetTransaction(params, &result, errors)

	if len(errors) == 0 {
		accFrom := db.Account{ID: result.AccountFromID}
		accTo := db.Account{ID: result.AccountToID}

		db.DB.Find(&accFrom)
		db.DB.Find(&accTo)

		if accFrom.CurrencyID == accTo.CurrencyID {
			result.AmountTo = result.AmountFrom
		}

		db.DB.Create(&result)
	}

	return result, errors
}

//TransactionsUpdate - update
func TransactionsUpdate(id int64, params map[string]interface{}) (db.Transaction, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Transaction{ID: id}

	validateAndSetTransaction(params, &result, errors)

	if len(errors) == 0 {
		db.DB.Save(&result)
	}

	return result, errors
}

//TransactionsDelete - delete
func TransactionsDelete(id int64) structs.RecordErrors {
	errors := make(structs.RecordErrors)
	result := db.Transaction{ID: id}

	if len(errors) == 0 {
		db.DB.Delete(&result)
	}

	return errors
}

func validateAndSetTransaction(params map[string]interface{}, result *db.Transaction, errors structs.RecordErrors) {

	if params["description"] == nil {
		result.Description = ""
	} else {
		result.Description = strings.TrimSpace(params["description"].(string))
	}

	result.Dt = strings.TrimSpace(params["dt"].(string))
	validateIsBlank("dt", result.Dt, errors)
	dtValid := validateIsDate("dt", result.Dt, errors)
	if dtValid {
		t, _ := time.Parse("2006-1-2", result.Dt)
		result.Dt = t.Format("2006-01-02")
	}

	accountFromValid := !validateIsNil("account_from", params["account_from_id"], errors)
	if accountFromValid {
		result.AccountFromID = int64(params["account_from_id"].(float64))
		validateAccountIDExists("account_from", result.AccountFromID, errors)
	}

	accountToValid := !validateIsNil("account_to", params["account_to_id"], errors)
	if accountToValid {
		result.AccountToID = int64(params["account_to_id"].(float64))
		validateAccountIDExists("account_to", result.AccountToID, errors)
	}

	amountFromValid := !validateIsNil("amount_from", params["amount_from"], errors)
	if amountFromValid {
		result.AmountFrom = int64(params["amount_from"].(float64) * 100)
	}

	amountToValid := !validateIsNil("amount_to", params["amount_to"], errors)
	if amountToValid {
		result.AmountTo = int64(params["amount_to"].(float64) * 100)
	}

}

func validateAccountIDExists(f string, accountID int64, errors structs.RecordErrors) {
	var count int64
	db.DB.Model(&db.Account{}).Where("id = ?", accountID).Count(&count)

	if count == 0 {
		errors[f] = append(errors[f], "account not exists")
	}
}
