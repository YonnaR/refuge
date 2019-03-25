package api

import (
	"refuge/controllers"
	"refuge/middlewares"

	"github.com/labstack/echo"
)

//SyncUserAPI link routes and controllers for the user api
func SyncUserAPI(a *echo.Echo) {

	a.GET("/api/users", controllers.AllUsersEndPoint, middlewares.AuthMiddleware)

	a.POST("/api/users", controllers.CreateUserEndPoint, middlewares.AuthMiddleware)

	a.PUT("/api/users", controllers.UpdateUserEndPoint, middlewares.AuthMiddleware)

	a.GET("/api/users/:id", controllers.FindUserEndPoint, middlewares.AuthMiddleware)

	a.DELETE("/api/users/:id", controllers.DeleteUserEndPoint, middlewares.AuthMiddleware)
}
