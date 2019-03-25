package api

import (
	"le-refuge-back/controllers"
	"le-refuge-back/middlewares"

	"github.com/labstack/echo"
)

//SyncMailAPI link routes and controllers for the Mail api
func SyncMailAPI(a *echo.Echo) {

	a.GET("/api/mails", controllers.AllMailsEndPoint, middlewares.AuthMiddleware)

	a.POST("/api/mails", controllers.CreateMailEndPoint, middlewares.AuthMiddleware)

	a.GET("/api/mails/:id", controllers.FindMailByIDEndPoint, middlewares.AuthMiddleware)

	a.DELETE("/api/mails/:id", controllers.DeleteMailEndPoint, middlewares.AuthMiddleware)
}
