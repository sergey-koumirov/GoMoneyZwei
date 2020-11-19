package structs

import "GoMoneyZwei/server/db"

//ViAccount - model
type ViAccount struct {
	ID       int64      `json:"id"`
	Name     string     `json:"name"`
	Tag      string     `json:"tag"`
	Visible  bool       `json:"visible"`
	Currency ViCurrency `json:"currency"`
}

//CopyFrom - copy
func (v *ViAccount) CopyFrom(source db.Account) {
	v.ID = source.ID
	v.Name = source.Name
	v.Tag = source.Tag
	v.Visible = (source.Visible == 1)
	v.Currency.CopyFrom(source.Currency)
}
