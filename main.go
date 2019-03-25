package main

import (
	"fmt"
	"le-refuge-back/controllers"
	"le-refuge-back/controllers/actions"
	"le-refuge-back/daos"
	"le-refuge-back/models"
	"le-refuge-back/routes"
	"le-refuge-back/utils"
	"os"
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

		routes.SetRoutes(e)
		e.Logger.Fatal(e.StartAutoTLS(os.Getenv("PORT")))
	} else {

		/* Middleware */

		/* recover */
		e.Use(middleware.Recover())

		/* loger */
		e.Use(middleware.Logger())

		routes.SetRoutes(e)
		e.Logger.Fatal(e.Start(os.Getenv("PORT")))
	}

}
