package structs

import (
	"GoMoneyZwei/server/db"
)

//ViCurrency - model
type ViCurrency struct {
	ID   int64  `json:"id"`
	Code string `json:"code"`
	Name string `json:"name"`
	Tag  string `json:"tag"`
}

//CopyFrom - copy
func (v *ViCurrency) CopyFrom(source db.Currency) {
	v.ID = source.ID
	v.Name = source.Name
	v.Code = source.Code
	v.Tag = source.Tag
}
