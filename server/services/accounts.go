package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"strings"
)

//AccountsIndex - load currencies
func AccountsIndex(visibleOnly bool, setType string) []structs.ViAccount {
	records := make([]db.Account, 0)

	scope := db.DB.Preload("Currency").Order("tag, name")

	if visibleOnly {
		scope = scope.Where("visible=1")
	}

	if setType == "for_income" {
		scope = scope.Where("tag in ('income','balance','stocks')")
	}

	if setType == "for_expense" {
		scope = scope.Where("tag in ('expense','balance','stocks')")
	}

	scope = scope.Find(&records)

	result := make([]structs.ViAccount, len(records))

	for i, r := range records {
		result[i].CopyFrom(r)
	}

	return result
}

//AccountsCreate - create
func AccountsCreate(params map[string]interface{}) (db.Account, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Account{}

	validateAndSetAccount(params, &result, errors)

	if len(errors) == 0 {
		db.DB.Create(&result)
	}

	return result, errors
}

//AccountsUpdate - update
func AccountsUpdate(id int64, params map[string]interface{}) (db.Account, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Account{ID: id}

	validateAndSetAccount(params, &result, errors)

	if len(errors) == 0 {
		db.DB.Save(&result)
	}

	return result, errors
}

//AccountsDelete - delete
func AccountsDelete(id int64) structs.RecordErrors {
	errors := make(structs.RecordErrors)
	result := db.Account{ID: id}

	validateUsesAccountID("id", id, errors)

	if len(errors) == 0 {
		db.DB.Delete(&result)
	}

	return errors
}

func validateUsesAccountID(f string, accountID int64, errors structs.RecordErrors) {
	var count int64
	db.DB.Model(&db.Transaction{}).Where("account_from_id = ? or account_to_id = ?", accountID, accountID).Count(&count)

	if count > 0 {
		errors[f] = append(errors[f], "used in transactions")
	}
}

func validateCurrencyIDExists(f string, currencyID int64, errors structs.RecordErrors) {
	var count int64
	db.DB.Model(&db.Currency{}).Where("id = ?", currencyID).Count(&count)

	if count == 0 {
		errors[f] = append(errors[f], "currency not exists")
	}
}

func validateAndSetAccount(params map[string]interface{}, result *db.Account, errors structs.RecordErrors) {
	result.Name = strings.TrimSpace(params["name"].(string))
	result.Tag = strings.TrimSpace(params["tag"].(string))

	validateIsBlank("name", result.Name, errors)
	validateIsBlank("tag", result.Tag, errors)
	validateInSet("tag", result.Tag, []string{"expense", "income", "balance", "stocks"}, errors)

	valid := !validateIsNil("currency", params["currency_id"], errors)
	if valid {
		result.CurrencyID = int64(params["currency_id"].(float64))
		validateCurrencyIDExists("currency", result.CurrencyID, errors)
	}

	visibleValid := !validateIsNil("visible", params["visible"], errors)

	if visibleValid {
		if params["visible"].(bool) {
			result.Visible = 1
		} else {
			result.Visible = 0
		}
	}

}
