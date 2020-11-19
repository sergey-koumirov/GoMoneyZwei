package main

import (
	"GoMoneyZwei/server/controllers"
	"GoMoneyZwei/server/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

var indexTmpl = func(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{})
}

func main() {

	_, err := db.GetDB()
	if err != nil {
		return
	}

	r := gin.Default()

	r.Static("/s/", "./dist")

	r.LoadHTMLGlob("server/templates/*")

	r.GET("/", indexTmpl)
	r.GET("/transactions", indexTmpl)
	r.GET("/accounts", indexTmpl)
	r.GET("/currencies", indexTmpl)

	api := r.Group("/api")
	{
		api.GET("/currencies", controllers.CurrenciesIndex)
		api.POST("/currencies", controllers.CurrenciesCreate)
		api.PUT("/currencies/:id", controllers.CurrenciesUpdate)
		api.DELETE("/currencies/:id", controllers.CurrenciesDelete)

		api.GET("/accounts", controllers.AccountsIndex)
		api.POST("/accounts", controllers.AccountsCreate)
		api.PUT("/accounts/:id", controllers.AccountsUpdate)
		api.DELETE("/accounts/:id", controllers.AccountsDelete)
	}

	r.Run()
}
