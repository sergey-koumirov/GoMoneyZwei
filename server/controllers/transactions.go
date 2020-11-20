package controllers

import (
	"GoMoneyZwei/server/services"
	"strconv"

	"github.com/gin-gonic/gin"
)

//TransactionsIndex - transactions list
func TransactionsIndex(c *gin.Context) {
	page, err := strconv.Atoi(c.Param("page"))
	if err != nil {
		page = 1
	}

	transactions, totalPages := services.TransactionsIndex(page)

	accounts := services.AccountsIndex()

	c.JSON(
		200,
		gin.H{
			"transactions": transactions,
			"accounts":     accounts,
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
