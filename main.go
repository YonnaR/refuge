package main

import (
	"net/http"
	"os"
	"refuge/controllers"
	"refuge/controllers/actions"
	"refuge/daos"
	"refuge/models"
	"refuge/routes"
	"refuge/utils"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var (
	dbDao daos.DAO
)

func init() {
	utils.LoadEnv()
	dbDao.Server = os.Getenv("DB_SERVER")
	dbDao.Database = os.Getenv("DB_NAME")
	models.Dialer = utils.GetDialer()
	connectDb()

}

func connectDb() {
	dbDao.Connect()
	controllers.Dao = &dbDao
	actions.Dao = &dbDao
}

func redirect(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		println("middleware")
		h.ServeHTTP(w, r)
	})
}
func main() {

	/* App instance */
	e := echo.New()

	/* loger */
	e.Use(middleware.Logger())

	/* Bind routes */
	routes.SetRoutes(e)
	/*
		//If prod is true in .env file
		if os.Getenv("prod") == "true" {

			// dns autorisation
			e.AutoTLSManager.HostPolicy = autocert.HostWhitelist("www.refugehulman.com")
			e.AutoTLSManager.HTTPHandler = redirect
			// cache file
			e.AutoTLSManager.Cache = autocert.DirCache("/var/www/.cache")

			// Http server
			go func(c *echo.Echo) {
				// https redirection
				e.Pre(middleware.HTTPSWWWRedirect())

				e.Logger.Fatal(e.Start(os.Getenv("HTTP_PORT")))
			}(e)

			// https redirection
			e.Pre(middleware.HTTPSWWWRedirect())

			// Https server
			e.Logger.Fatal(e.StartAutoTLS(os.Getenv("HTTPS")))
		} else { */

	/* loger */
	e.Use(middleware.Logger())

	e.Logger.Fatal(e.Start(os.Getenv("HTTP_PORT")))
	//}

}
