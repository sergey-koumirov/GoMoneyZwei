package controllers

import (
	"GoMoneyZwei/server/services"

	"github.com/gin-gonic/gin"
)

//ReportsIndex - current month, next month, year
func ReportsIndex(c *gin.Context) {
	reports := services.ReportsIndex()
	c.JSON(200, gin.H{"reports": reports})
}
