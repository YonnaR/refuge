package daos

import (
	"refuge/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	ReservationRestaurantCollection = "restaurantReservations"
)

func (m *DAO) FindAllRestaurantReservations() ([]models.RestaurantReservation, error) {
	var reservations []models.RestaurantReservation
	err := db.C(ReservationRestaurantCollection).Find(bson.M{}).Sort("-date").All(&reservations)
	return reservations, err
}

func (m *DAO) FindRestaurantReservationById(id string) (models.RestaurantReservation, error) {
	var reservation models.RestaurantReservation
	err := db.C(ReservationRestaurantCollection).FindId(bson.ObjectIdHex(id)).One(&reservation)
	return reservation, err
}

func (m *DAO) InsertRestaurantReservation(reservation models.RestaurantReservation) error {
	err := db.C(ReservationRestaurantCollection).Insert(&reservation)
	return err
}

func (m *DAO) DeleteRestaurantReservation(id string) error {
	err := db.C(ReservationRestaurantCollection).RemoveId(id)
	return err
}

func (m *DAO) UpdateRestaurantReservation(reservation models.RestaurantReservation) error {
	err := db.C(ReservationRestaurantCollection).UpdateId(reservation.ID, &reservation)
	return err
}
