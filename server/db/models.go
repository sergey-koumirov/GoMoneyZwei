package db

//Currency - model
type Currency struct {
	ID   int64  `gorm:"column:id"`
	Name string `gorm:"column:name"`
	Code string `gorm:"column:code"`
	Tag  string `gorm:"column:tag"`
}

//TableName - table name
func (Currency) TableName() string {
	return "currencies"
}

//Account - model
type Account struct {
	ID         int64  `gorm:"column:id"`
	Name       string `gorm:"column:name"`
	Tag        string `gorm:"column:tag"`
	Visible    int64  `gorm:"column:visible"`
	CurrencyID int64  `gorm:"column:currency_id"`
	Currency   Currency
}

//TableName - table name
func (Account) TableName() string {
	return "accounts"
}
