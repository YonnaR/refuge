package api

import (
	"le-refuge-back/controllers"
	"le-refuge-back/middlewares"

	"github.com/labstack/echo"
)

//SyncCommentAPI link routes and controllers for the Commentary api
func SyncCommentAPI(a *echo.Echo) {

	a.GET("/api/commentaries", controllers.AllCommentsEndPoint)

	a.POST("/api/commentaries", controllers.CreateCommentEndPoint)

	a.PUT("/api/commentaries/:id", controllers.UpdateCommentEndPoint, middlewares.AuthMiddleware)

	a.GET("/api/commentaries/:id", controllers.FindCommentByIDEndPoint)

	a.DELETE("/api/commentaries/:id", controllers.DeleteCommentEndPoint, middlewares.AuthMiddleware)
}
