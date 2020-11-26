package oldmodels

//Currency - model
type Currency struct {
	ID   int64  `form:"ID"`
	Num  string `form:"Num"`
	Code string `form:"Code"`
}

//Account - model
type Account struct {
	ID         int64  `form:"ID"`
	Name       string `form:"Name"`
	Type       string `form:"Type"`
	Currency   Currency
	CurrencyID int64 `form:"CurrencyID"`
	Hidden     int64 `form:"Hidden"`
}

//Transaction - model
type Transaction struct {
	ID            int64 `form:"ID"`
	AccountFrom   Account
	AccountFromID int64 `form:"AccountFromID"`
	AccountTo     Account
	AccountToID   int64  `form:"AccountToID"`
	Date          string `form:"Date"`
	AmountFrom    int64
	AmountTo      int64
	Comment       string `form:"Comment"`
}

//Template - model
type Template struct {
	ID            int64  `form:"ID"`
	Title         string `form:"Title"`
	AccountFrom   Account
	AccountFromID int64 `form:"AccountFromID"`
	AccountTo     Account
	AccountToID   int64 `form:"AccountToID"`
	AmountFrom    int64
	AmountTo      int64
	FocusOn       string `form:"FocusOn"`
}
