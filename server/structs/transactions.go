package structs

import "GoMoneyZwei/server/db"

//ViTransaction - model
type ViTransaction struct {
	ID          int64     `json:"id"`
	Description string    `json:"description"`
	Dt          string    `json:"dt"`
	AccountFrom ViAccount `json:"account_from"`
	AmountFrom  float64   `json:"amount_from"`
	AccountTo   ViAccount `json:"account_to"`
	AmountTo    float64   `json:"amount_to"`
}

//CopyFrom - copy
func (v *ViTransaction) CopyFrom(source db.Transaction) {
	v.ID = source.ID
	v.Description = source.Description
	v.Dt = source.Dt
	v.AmountFrom = float64(source.AmountFrom) / 100.0
	v.AmountTo = float64(source.AmountTo) / 100.0
	v.AccountFrom.CopyFrom(source.AccountFrom)
	v.AccountTo.CopyFrom(source.AccountTo)
}
