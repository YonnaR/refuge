package actions

import (
	"fmt"
	"refuge/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

func ReservationActionEndPoint(c echo.Context) error {
	var r models.Reservation
	//generate id/date
	r.ID = bson.NewObjectId()
	r.Date = time.Now()

	if err := c.Bind(&r); err != nil {
		return c.String(200, " error : "+err.Error())
	}
	if err := Dao.InsertReservation(r); err != nil {
		return c.String(200, " error : "+err.Error())
	}
	go r.Send()
	//insert to model to database
	return c.String(200, "success")
}

func RestaurantReservationActionEndPoint(c echo.Context) error {
	var r models.RestaurantReservation
	//generate id/date
	r.ID = bson.NewObjectId()
	r.Date = time.Now()

	if err := c.Bind(&r); err != nil {
		return c.String(200, " error : "+err.Error())
	}
	fmt.Println(r)
	if err := Dao.InsertRestaurantReservation(r); err != nil {
		return c.String(200, " error : "+err.Error())
	}
	go r.Send()
	//insert to model to database
	return c.String(200, "success")
}
