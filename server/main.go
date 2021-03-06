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
	r.GET("/templates", indexTmpl)

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

		api.GET("/transactions", controllers.TransactionsIndex)
		api.POST("/transactions", controllers.TransactionsCreate)
		api.PUT("/transactions/:id", controllers.TransactionsUpdate)
		api.DELETE("/transactions/:id", controllers.TransactionsDelete)

		api.GET("/templates", controllers.TemplatesIndex)
		api.POST("/templates", controllers.TemplatesCreate)
		api.PUT("/templates/:id", controllers.TemplatesUpdate)
		api.DELETE("/templates/:id", controllers.TemplatesDelete)

		api.GET("/reports", controllers.ReportsIndex)
	}

	r.Run()
}
