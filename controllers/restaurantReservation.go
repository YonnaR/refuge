package controllers

import (
	"refuge/models"

	"github.com/labstack/echo"
)

// AllRestaurantReservationsEndPoint () => all reservations
func AllRestaurantReservationsEndPoint(c echo.Context) error {
	reservations, err := Dao.FindAllRestaurantReservations()
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, reservations)
}

// FindRestaurantReservationEndPoint (reservation id) => reservation
func FindRestaurantReservationEndPoint(c echo.Context) error {
	reservation, err := Dao.FindRestaurantReservationById(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, reservation)
}

// UpdateRestaurantReservationEndPoint ( reservation data ) => update reservation data
func UpdateRestaurantReservationEndPoint(c echo.Context) error {
	//set Model
	var u models.RestaurantReservation

	//bind data to model
	if err := c.Bind(&u); err != nil {
		return c.String(422, err.Error())
	}
	//insert to model to database
	if err := Dao.UpdateRestaurantReservation(u); err != nil {
		return c.String(500, err.Error())
	}
	//return success
	return c.String(200, "Reservation Updated successfully")
}

// DeleteRestaurantReservationEndPoint ( reservation id ) => delete reservation
func DeleteRestaurantReservationEndPoint(c echo.Context) error {
	err := Dao.DeleteRestaurantReservation(c.Param("id"))
	if err != nil {
		return c.String(500, err.Error())
	}
	return c.JSON(200, "success")
}
