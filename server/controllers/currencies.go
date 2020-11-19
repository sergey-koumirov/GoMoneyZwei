package controllers

import (
	"GoMoneyZwei/server/services"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

//CurrenciesIndex - currencies list
func CurrenciesIndex(c *gin.Context) {
	currencies := services.CurrenciesIndex()
	c.JSON(200, gin.H{"currencies": currencies})
}

//CurrenciesCreate - create
func CurrenciesCreate(c *gin.Context) {
	temp := make(map[string]interface{})
	c.Bind(&temp)

	currency, errors := services.CurrenciesCreate(temp)

	c.JSON(200, gin.H{"currency": currency, "errors": errors})
}

//CurrenciesUpdate - update
func CurrenciesUpdate(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	temp := make(map[string]interface{})
	err := c.Bind(&temp)
	if err != nil {
		fmt.Println(err)
	}

	currency, errors := services.CurrenciesUpdate(id, temp)

	c.JSON(200, gin.H{"currency": currency, "errors": errors})
}

//CurrenciesDelete - delete
func CurrenciesDelete(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	errors := services.CurrenciesDelete(id)

	c.JSON(200, gin.H{"errors": errors})
}
