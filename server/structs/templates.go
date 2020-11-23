package structs

import "GoMoneyZwei/server/db"

//ViTemplate - model
type ViTemplate struct {
	ID          int64     `json:"id"`
	Description string    `json:"description"`
	AccountFrom ViAccount `json:"account_from"`
	AmountFrom  float64   `json:"amount_from"`
	AccountTo   ViAccount `json:"account_to"`
	AmountTo    float64   `json:"amount_to"`
}

//CopyFrom - copy
func (v *ViTemplate) CopyFrom(source db.Template) {
	v.ID = source.ID
	v.Description = source.Description
	v.AmountFrom = float64(source.AmountFrom) / 100.0
	v.AmountTo = float64(source.AmountTo) / 100.0
	v.AccountFrom.CopyFrom(source.AccountFrom)
	v.AccountTo.CopyFrom(source.AccountTo)
}
