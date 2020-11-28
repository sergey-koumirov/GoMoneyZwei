package controllers

import (
	"GoMoneyZwei/server/services"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

//TransactionsIndex - transactions list
func TransactionsIndex(c *gin.Context) {
	page, err := strconv.Atoi(c.Query("page"))
	if err != nil {
		page = 1
	}

	transactions, totalPages := services.TransactionsIndex(page)

	accountsFI := services.AccountsIndex(true, "for_income")
	accountsFE := services.AccountsIndex(true, "for_expense")

	templates := services.TemplatesIndex()

	c.JSON(
		200,
		gin.H{
			"transactions": transactions,
			"accounts_i":   accountsFI,
			"accounts_e":   accountsFE,
			"templates":    templates,
			"page":         page,
			"total_pages":  totalPages,
		},
	)
}

//TransactionsCreate - create
func TransactionsCreate(c *gin.Context) {
	temp := make(map[string]interface{})
	c.Bind(&temp)

	transaction, errors := services.TransactionsCreate(temp)

	c.JSON(200, gin.H{"transaction": transaction, "errors": errors})
}

//TransactionsUpdate - update
func TransactionsUpdate(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	temp := make(map[string]interface{})
	err := c.Bind(&temp)
	if err != nil {
		fmt.Println(err)
	}

	transaction, errors := services.TransactionsUpdate(id, temp)

	c.JSON(200, gin.H{"transaction": transaction, "errors": errors})
}

//TransactionsDelete - delete
func TransactionsDelete(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	errors := services.TransactionsDelete(id)

	c.JSON(200, gin.H{"errors": errors})
}
