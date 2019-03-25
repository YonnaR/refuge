package main

import (
	"fmt"
	"os"
	"refuge/controllers"
	"refuge/controllers/actions"
	"refuge/daos"
	"refuge/models"
	"refuge/routes"
	"refuge/utils"
	"time"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"golang.org/x/crypto/acme/autocert"
)

var (
	dbDao daos.DAO
)

func init() {
	utils.LoadEnv()
	connectDb()
	dbDao.Server = os.Getenv("DB_SERVER")
	dbDao.Database = os.Getenv("DB_NAME")
	models.Dialer = utils.GetDialer()
}

func connectDb() {
	dbDao.Connect()
	controllers.Dao = &dbDao
	actions.Dao = &dbDao
}

func main() {
	fmt.Println(time.Now())
	e := echo.New()

	if os.Getenv("prod") == "true" {
		e.AutoTLSManager.HostPolicy = autocert.HostWhitelist("refugehulman.com")

		e.AutoTLSManager.Cache = autocert.DirCache("/var/www/.cache")

		/* Middleware */

		/* recover */
		e.Use(middleware.Recover())

		/* loger */
		e.Use(middleware.Logger())

		/* redirect to https */
		e.Pre(middleware.HTTPSWWWRedirect())

		/* Launch http server */
		go func(c *echo.Echo) {
			e.Logger.Fatal(e.Start(os.Getenv("HTTP_PORT")))
		}(e)

		/* Atta */
		routes.SetRoutes(e)
		e.Logger.Fatal(e.StartAutoTLS(os.Getenv("HTTPS")))
	} else {

		/* Middleware */

		/* recover */
		e.Use(middleware.Recover())

		/* loger */
		e.Use(middleware.Logger())

		routes.SetRoutes(e)
		e.Logger.Fatal(e.Start(os.Getenv("HTTP_PORT")))
	}

}
