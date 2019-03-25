package controllers

import (
	"le-refuge-back/daos"
	"le-refuge-back/models"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// Dao of the db server
var Dao *daos.DAO

// AllCommentsEndPoint ()=>all commentaries
func AllCommentsEndPoint(c echo.Context) error {
	comments, err := Dao.FindAllComments()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, comments)
}

// FindCommentByIDEndPoint (id of the commentary)=> commentary
func FindCommentByIDEndPoint(c echo.Context) error {
	comment, err := Dao.FindCommentById(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, comment)

}

// CreateCommentEndPoint (new commentary data) => create commentary
func CreateCommentEndPoint(c echo.Context) error {
	//set Model
	var m models.Commentary

	//generate id/date
	m.ID = bson.NewObjectId()
	m.Date = time.Now()

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}

	//insert to model to database
	if err := Dao.InsertComment(m); err != nil {
		return c.String(500, err.Error())
	}

	//return success
	return c.String(200, "User Created successfully")
}

//UpdateCommentEndPoint ( new commentary data ) => update commentary data
func UpdateCommentEndPoint(c echo.Context) error {
	//set Model
	var m models.Commentary
	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, "error : "+err.Error())
	}
	//insert to model to database
	if err := Dao.UpdateComment(m, c.Param("id")); err != nil {
		return c.String(500, "error : "+err.Error())
	}
	//return success
	return c.String(200, "Commentary Updated successfully")
}

//DeleteCommentEndPoint ( commentary id )=> Delete commentary
func DeleteCommentEndPoint(c echo.Context) error {
	err := Dao.DeleteComment(c.Param("id"))
	if err != nil {
		return c.JSON(500, "error : "+err.Error())
	}
	return c.JSON(200, "success")
}
