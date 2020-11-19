package db

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

//DB global DB
var DB *gorm.DB

//GetDB Get DB
func GetDB() (*gorm.DB, error) {

	if DB != nil {
		return DB, nil
	}

	db, err := gorm.Open(sqlite.Open("./gmz-dev.sqlite"), &gorm.Config{})

	if err != nil {
		fmt.Println("DB:", err)
		return nil, err
	}

	DB = db

	return DB, nil
}
