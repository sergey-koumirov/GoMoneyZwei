package structs

import "GoMoneyZwei/server/db"

//ViAccount - model
type ViTransaction struct {
	ID          int64     `json:"id"`
	Description string    `json:"description"`
	Dt          string    `json:"dt"`
	AccountFrom ViAccount `json:"account_from"`
	AmountFrom  int64
	AccountTo   ViAccount `json:"account_To"`
	AmountTo    int64
}

//CopyFrom - copy
func (v *ViTransaction) CopyFrom(source db.Transaction) {
	v.ID = source.ID
	v.Description = source.Description
	v.Dt = source.Dt
	v.AccountFrom.CopyFrom(source.AccountFrom)
	v.AccountTo.CopyFrom(source.AccountTo)
}
