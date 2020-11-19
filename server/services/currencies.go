package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"strings"
)

//CurrenciesIndex - load currencies
func CurrenciesIndex() []structs.ViCurrency {
	records := make([]db.Currency, 0)
	db.DB.Find(&records)

	result := make([]structs.ViCurrency, len(records))

	for i, r := range records {
		result[i].CopyFrom(r)
	}

	return result
}

//CurrenciesCreate - create
func CurrenciesCreate(params map[string]interface{}) (db.Currency, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Currency{}

	result.Name = strings.TrimSpace(params["name"].(string))
	result.Code = strings.TrimSpace(params["code"].(string))
	result.Tag = strings.TrimSpace(params["tag"].(string))

	validateIsBlank("name", result.Name, errors)
	validateIsBlank("code", result.Code, errors)
	validateIsBlank("tag", result.Tag, errors)
	validateInSet("tag", result.Tag, []string{"curr", "stock"}, errors)

	if len(errors) == 0 {
		db.DB.Create(&result)
	}

	return result, errors
}

//CurrenciesUpdate - update
func CurrenciesUpdate(id int64, params map[string]interface{}) (db.Currency, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Currency{ID: id}

	result.Name = strings.TrimSpace(params["name"].(string))
	result.Code = strings.TrimSpace(params["code"].(string))
	result.Tag = strings.TrimSpace(params["tag"].(string))

	validateIsBlank("name", result.Name, errors)
	validateIsBlank("code", result.Code, errors)
	validateIsBlank("tag", result.Tag, errors)
	validateInSet("tag", result.Tag, []string{"curr", "stock"}, errors)

	if len(errors) == 0 {
		db.DB.Save(&result)
	}

	return result, errors
}

//CurrenciesDelete - delete
func CurrenciesDelete(id int64) structs.RecordErrors {
	errors := make(structs.RecordErrors)
	result := db.Currency{ID: id}

	validateUsesCurrencyID("id", id, errors)

	if len(errors) == 0 {
		db.DB.Delete(&result)
	}

	return errors
}

func validateUsesCurrencyID(f string, currencyID int64, errors structs.RecordErrors) {
	var count int64
	db.DB.Model(&db.Account{}).Where("currency_id = ?", currencyID).Count(&count)

	if count > 0 {
		errors[f] = append(errors[f], "used in accounts")
	}
}
