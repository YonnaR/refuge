package controllers

import (
	"le-refuge-back/models"

	"github.com/labstack/echo"
)

// AllReservationsEndPoint () => all reservations
func AllReservationsEndPoint(c echo.Context) error {
	reservations, err := Dao.FindAllReservations()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, reservations)
}

// FindReservationEndPoint (reservation id) => reservation
func FindReservationEndPoint(c echo.Context) error {
	reservation, err := Dao.FindReservationById(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, reservation)

}

// UpdateReservationEndPoint ( reservation data ) => update reservation data
func UpdateReservationEndPoint(c echo.Context) error {
	//set Model
	var u models.Reservation

	//bind data to model
	if err := c.Bind(&u); err != nil {
		return c.String(422, err.Error())
	}
	//insert to model to database
	if err := Dao.UpdateReservation(u); err != nil {
		return c.String(500, err.Error())
	}
	//return success
	return c.String(200, "Reservation Updated successfully")
}

// DeleteReservationEndPoint ( reservation id ) => delete reservation
func DeleteReservationEndPoint(c echo.Context) error {
	err := Dao.DeleteReservation(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, "success")
}
