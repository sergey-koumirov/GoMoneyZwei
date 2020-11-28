package controllers

import (
	"GoMoneyZwei/server/services"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

//TemplatesIndex - templates list
func TemplatesIndex(c *gin.Context) {

	templates := services.TemplatesIndex()

	accounts := services.AccountsIndex(true, "")

	c.JSON(
		200,
		gin.H{
			"templates": templates,
			"accounts":  accounts,
		},
	)
}

//TemplatesCreate - create
func TemplatesCreate(c *gin.Context) {
	temp := make(map[string]interface{})
	c.Bind(&temp)

	template, errors := services.TemplatesCreate(temp)

	c.JSON(200, gin.H{"template": template, "errors": errors})
}

//TemplatesUpdate - update
func TemplatesUpdate(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	temp := make(map[string]interface{})
	err := c.Bind(&temp)
	if err != nil {
		fmt.Println(err)
	}

	template, errors := services.TemplatesUpdate(id, temp)

	c.JSON(200, gin.H{"template": template, "errors": errors})
}

//TemplatesDelete - delete
func TemplatesDelete(c *gin.Context) {
	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	errors := services.TemplatesDelete(id)

	c.JSON(200, gin.H{"errors": errors})
}
