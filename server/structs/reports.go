package structs

// ViAccountRecord - model
type ViAccountRecord struct {
	AccountID    int64
	AccountName  string
	CurrencyCode string
	Amount       float64
	Percent      float64
	SumPercent   float64
}

// ViAccountsInfo - model
type ViAccountsInfo struct {
	Records []ViAccountRecord
	Total   float64
}

// ViReports - model
type ViReports struct {
	MoneyRests      map[string]ViAccountsInfo
	StocksRests     map[string]ViAccountsInfo
	CurrentIncome   map[string]ViAccountsInfo
	CurrentExpense  map[string]ViAccountsInfo
	PreviousIncome  map[string]ViAccountsInfo
	PreviousExpense map[string]ViAccountsInfo
	YearIncome      map[string]ViAccountsInfo
	YearExpense     map[string]ViAccountsInfo
	CurrentDate     string
	CurrentMonth    string
	PreviousMonth   string

	IOStats []ViAccountIORecord
}

// ViCurrencyIORecord - model
type ViCurrencyIORecord struct {
	CurrencyCode string
	Amount       float64
}

// ViAccountIORecord - model
type ViAccountIORecord struct {
	AccountID        int64
	AccountName      string
	CurrencyCode     string
	Incoming         []ViCurrencyIORecord
	Outcoming        []ViCurrencyIORecord
	RecommendedPrice float64
}
