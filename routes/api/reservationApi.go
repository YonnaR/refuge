package api

import (
	"le-refuge-back/controllers"
	"le-refuge-back/middlewares"

	"github.com/labstack/echo"
)

//SyncReservationAPI link routes and controllers for the Reservation api
func SyncReservationAPI(a *echo.Echo) {

	a.GET("/api/reservations", controllers.AllReservationsEndPoint, middlewares.AuthMiddleware)

	a.GET("/api/reservations/:id", controllers.FindReservationEndPoint, middlewares.AuthMiddleware)

	a.DELETE("/api/reservations/:id", controllers.DeleteReservationEndPoint, middlewares.AuthMiddleware)
}
