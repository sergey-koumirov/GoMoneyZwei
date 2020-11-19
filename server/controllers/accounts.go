package controllers

import (
	"GoMoneyZwei/server/services"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

//AccountsIndex - currencies list
func AccountsIndex(c *gin.Context) {
	accounts := services.AccountsIndex()
	currencies := services.CurrenciesIndex()
	c.JSON(200, gin.H{"accounts": accounts, "currencies": currencies})
}

//AccountsCreate - create
func AccountsCreate(c *gin.Context) {
	temp := make(map[string]interface{})
	c.Bind(&temp)

	account, errors := services.AccountsCreate(temp)

	c.JSON(200, gin.H{"account": account, "errors": errors})
}

//AccountsUpdate - update
func AccountsUpdate(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	temp := make(map[string]interface{})
	err := c.Bind(&temp)
	if err != nil {
		fmt.Println(err)
	}

	account, errors := services.AccountsUpdate(id, temp)

	c.JSON(200, gin.H{"account": account, "errors": errors})
}

//AccountsDelete - delete
func AccountsDelete(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	errors := services.AccountsDelete(id)

	c.JSON(200, gin.H{"errors": errors})
}
