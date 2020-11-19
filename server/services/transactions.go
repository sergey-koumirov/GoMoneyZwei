package services

import (
	"GoMoneyZwei/server/db"
	"GoMoneyZwei/server/structs"
	"math"
)

const perPage = 100

//TransactionsIndex - load transctions
func TransactionsIndex(page int) ([]structs.ViTransaction, int64) {
	records := make([]db.Transaction, 0)
	db.DB.Preload("AccountFrom.Currency").Preload("AccountTo.Currency").Limit(perPage).Offset((page - 1) * perPage).Find(&records)

	var count int64
	db.DB.Model(db.Transaction{}).Count(&count)

	pages := int64(math.Ceil(float64(count) / float64(perPage)))

	result := make([]structs.ViTransaction, len(records))

	for i, r := range records {
		result[i].CopyFrom(r)
	}

	return result, pages
}
