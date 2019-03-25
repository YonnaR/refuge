package daos

import (
	"refuge/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	ReservationCollection = "reservations"
)

func (m *DAO) FindAllReservations() ([]models.Reservation, error) {
	var reservations []models.Reservation
	err := db.C(ReservationCollection).Find(bson.M{}).Sort("-date").All(&reservations)
	return reservations, err
}

func (m *DAO) FindReservationById(id string) (models.Reservation, error) {
	var reservation models.Reservation
	err := db.C(ReservationCollection).FindId(bson.ObjectIdHex(id)).One(&reservation)
	return reservation, err
}

func (m *DAO) InsertReservation(reservation models.Reservation) error {
	err := db.C(ReservationCollection).Insert(&reservation)
	return err
}

func (m *DAO) DeleteReservation(id string) error {
	err := db.C(ReservationCollection).RemoveId(id)
	return err
}

func (m *DAO) UpdateReservation(reservation models.Reservation) error {
	err := db.C(ReservationCollection).UpdateId(reservation.ID, &reservation)
	return err
}
