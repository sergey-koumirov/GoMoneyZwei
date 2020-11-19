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

	c.JSON(200, gin.H{"transactions": transactions, "page": page, "total_pages": totalPages})
}
