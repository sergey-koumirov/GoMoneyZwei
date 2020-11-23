package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"strings"
)

const perPage = 100

//TemplatesIndex - load transctions
func TemplatesIndex() []structs.ViTemplate {
	records := make([]db.Template, 0)
	db.DB.
		Preload("AccountFrom.Currency").
		Preload("AccountTo.Currency").
		Order("id desc").
		Find(&records)

	result := make([]structs.ViTemplate, len(records))

	for i, r := range records {
		result[i].CopyFrom(r)
	}

	return result
}

//TemplatesCreate - create
func TemplatesCreate(params map[string]interface{}) (db.Template, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Template{}

	validateAndSetTemplate(params, &result, errors)

	if len(errors) == 0 {
		db.DB.Create(&result)
	}

	return result, errors
}

//TemplatesUpdate - update
func TemplatesUpdate(id int64, params map[string]interface{}) (db.Template, structs.RecordErrors) {
	errors := make(structs.RecordErrors)
	result := db.Template{ID: id}

	validateAndSetTemplate(params, &result, errors)

	if len(errors) == 0 {
		db.DB.Save(&result)
	}

	return result, errors
}

//TemplatesDelete - delete
func TemplatesDelete(id int64) structs.RecordErrors {
	errors := make(structs.RecordErrors)
	result := db.Template{ID: id}

	if len(errors) == 0 {
		db.DB.Delete(&result)
	}

	return errors
}

func validateAndSetTemplate(params map[string]interface{}, result *db.Template, errors structs.RecordErrors) {

	if params["description"] == nil {
		result.Description = ""
	} else {
		result.Description = strings.TrimSpace(params["description"].(string))
	}

	if params["account_from_id"] != nil {
		result.AccountFromID = int64(params["account_from_id"].(float64))
		if result.AccountFromID > 0 {
			validateAccountIDExists("account_from", result.AccountFromID, errors)
		}
	}

	if params["account_to_id"] != nil {
		result.AccountToID = int64(params["account_to_id"].(float64))
		if result.AccountToID > 0 {
			validateAccountIDExists("account_to", result.AccountToID, errors)
		}
	}

	if params["amount_from"] != nil {
		result.AmountFrom = int64(params["amount_from"].(float64) * 100)
	}

	if params["amount_to"] != nil {
		result.AmountTo = int64(params["amount_to"].(float64) * 100)
	}

}
