package routes

import (
	"le-refuge-back/routes/api"

	"github.com/labstack/echo"
)

//SetRoutes (application) => set all routes
func SetRoutes(a *echo.Echo) {

	a.Static("/", "client/build")
	a.Static("/images", "images")
	api.SyncMailAPI(a)
	api.SyncCommentAPI(a)
	api.SyncReservationAPI(a)
	api.SyncUserAPI(a)
	SyncActionsRoutes(a)
}
