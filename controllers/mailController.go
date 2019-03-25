package controllers

import (
	"refuge/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllMailsEndPoint () => All Mails
func AllMailsEndPoint(c echo.Context) error {
	mails, err := Dao.FindAllMails()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, mails)

}

// FindMailByIDEndPoint (mail id ) => mail
func FindMailByIDEndPoint(c echo.Context) error {
	mail, err := Dao.FindMailById(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, mail)

}

// CreateMailEndPoint (mail data)=> create mail
func CreateMailEndPoint(c echo.Context) error {

	//set Model
	var m models.Mail

	//generate id/date
	m.ID = bson.NewObjectId()
	m.Date = time.Now()

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}

	//insert to model to database
	if err := Dao.InsertMail(m); err != nil {
		return c.String(500, err.Error())
	}
	go m.Send()

	//return success
	return c.String(200, "User Created successfully")
}

//DeleteMailEndPoint ( mail id )=>delete mail
func DeleteMailEndPoint(c echo.Context) error {
	err := Dao.DeleteMail(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, "success")
}
