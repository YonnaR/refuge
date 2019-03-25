package routes

import (
	"le-refuge-back/controllers/actions"

	"github.com/labstack/echo"
)

//SyncActionsRoutes link routes and controllers for the user api
func SyncActionsRoutes(a *echo.Echo) {

	a.GET("/login", actions.LoginActionEndPoint)

	a.POST("/reservation", actions.ReservationActionEndPoint)

	a.POST("/comment", actions.CommentaryActionEndPoint)

	a.POST("/infos", actions.InformationActionEndPoint)

}
