package controllers

import (
	"le-refuge-back/models"
	"le-refuge-back/utils"
	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

// AllUsersEndPoint ( ) => all users
func AllUsersEndPoint(c echo.Context) error {
	users, err := Dao.FindAllUsers()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, users)
}

// FindUserEndPoint ( user id ) => user
func FindUserEndPoint(c echo.Context) error {
	user, err := Dao.FindUserById(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, user)

}

// CreateUserEndPoint ( user data) => create user
func CreateUserEndPoint(c echo.Context) error {
	//set Model
	var m models.User

	//bind data to model
	if err := c.Bind(&m); err != nil {
		return c.String(422, err.Error())
	}

	//generate id/date and hash password
	m.ID = bson.NewObjectId()
	m.Password = utils.GenerateHash(m.Password)
	m.Created = time.Now()

	//insert to model to database
	if err := Dao.InsertUser(m); err != nil {
		return c.String(500, err.Error())
	}

	//return success
	return c.String(200, "User Created successfully")
}

// UpdateUserEndPoint ( user data ) => update user data
func UpdateUserEndPoint(c echo.Context) error {
	//set Model
	var u models.User

	//bind data to model
	if err := c.Bind(&u); err != nil {
		return c.String(422, err.Error())
	}
	//insert to model to database
	if err := Dao.UpdateUser(u); err != nil {
		return c.String(500, err.Error())
	}
	//return success
	return c.String(200, "User Updated successfully")
}

// DeleteUserEndPoint ( user id ) => delete user
func DeleteUserEndPoint(c echo.Context) error {
	err := Dao.DeleteUser(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, "success")
}
