package actions

import (
	"le-refuge-back/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

func CommentaryActionEndPoint(c echo.Context) error {
	var com models.Commentary

	if err := c.Bind(&com); err != nil {
		return c.String(301, err.Error())
	}
	com.Date = time.Now()
	com.ID = bson.NewObjectId()
	go com.Send()
	if err := Dao.InsertComment(com); err != nil {
		c.String(301, "Can't insert commentary to db "+err.Error())
	}
	return c.String(200, "success")

}
