package actions

import (
	"refuge/models"
	"os"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

func InformationActionEndPoint(c echo.Context) error {
	var m models.Mail
	if err := c.Bind(&m); err != nil {
		return c.String(301, "error : "+err.Error())
	}
	m.ID = bson.NewObjectId()
	m.Date = time.Now()
	m.To = os.Getenv("MAIL_USER")

	if err := Dao.InsertMail(m); err != nil {
		return c.String(301, "error : "+err.Error())
	}

	go m.Send()
	return c.String(200, "success")
}
