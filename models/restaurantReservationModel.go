package models

import (
	"bytes"
	"html/template"
	"io/ioutil"
	"log"
	"os"
	"time"

	gomail "gopkg.in/gomail.v2"
	"gopkg.in/mgo.v2/bson"
)

// RestaurantReservation is structure of a reservation
type RestaurantReservation struct {
	ID              bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	FirstName       string        `bson:"firstName" json:"firstName" binding:"required"`
	LastName        string        `bson:"lastName" json:"lastName" binding:"required"`
	Mail            string        `bson:"mail" json:"mail" binding:"required"`
	Tel             int           `bson:"tel" json:"tel" binding:"required"`
	Couverts        int           `bson:"couverts" json:"couverts" binding:"required"`
	Hour            string        `bson:"hour" json:"hour" binding:"required"`
	ReservationDate string        `bson:"reservationDate" json:"reservationDate" binding:"required"`
	Message         string        `bson:"message" json:"message" binding:"required"`
	Date            time.Time     `bson:"date" json:"date" binding:"required"`
}

type mailRestaurantReservation struct {
	FirstName       string `bson:"firstName" json:"firstName" binding:"required"`
	LastName        string `bson:"lastName" json:"lastName" binding:"required"`
	Mail            string `bson:"mail" json:"mail" binding:"required"`
	Tel             int    `bson:"tel" json:"tel" binding:"required"`
	Couverts        int    `bson:"couverts" json:"couverts" binding:"required"`
	Hour            string `bson:"hour" json:"hour" binding:"required"`
	ReservationDate string `bson:"reservationDate" json:"reservationDate" binding:"required"`
	Message         string `bson:"message" json:"message" binding:"required"`
	Date            string `bson:"date" json:"date" binding:"required"`
}

//Send function send the mail to user
func (res *RestaurantReservation) Send() {
	mRes := mailRestaurantReservation{
		FirstName:       res.FirstName,
		LastName:        res.LastName,
		Couverts:        res.Couverts,
		Mail:            res.Mail,
		Hour:            res.Hour,
		Message:         res.Message,
		Tel:             res.Tel,
		Date:            res.Date.Format(TimeLayout),
		ReservationDate: res.ReservationDate,
	}
	res.sendAdmin(mRes)
	res.sendUser(mRes)
}

func (res *RestaurantReservation) sendAdmin(data mailRestaurantReservation) {
	//Get html file
	t, err := ioutil.ReadFile("templates/admin/restaurant-reservation.html")
	if err != nil {
		panic(err.Error())
	}

	//buf will receive template executed
	buf := &bytes.Buffer{}

	//generate/parse/exec template
	tmpl := template.New("mail")
	tmpl.Parse(string(t))
	tmpl.Execute(buf, data)
	if err != nil {
		panic(err.Error())
	}

	m := gomail.NewMessage()
	m.SetHeader("From", res.Mail)
	m.SetAddressHeader("To", "refugehulman@gmail.com", "site www.refugehulman.com")
	m.SetHeader("Subject", "Nouvelle Réservation sur le site")
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}

func (res *RestaurantReservation) sendUser(data mailRestaurantReservation) {
	//Get html file
	t, err := ioutil.ReadFile("templates/user/restaurant-reservation.html")
	if err != nil {
		panic(err.Error())
	}

	//buf will receive template executed
	buf := &bytes.Buffer{}

	//generate/parse/exec template
	tmpl := template.New("mail")
	tmpl.Parse(string(t))
	tmpl.Execute(buf, data)
	if err != nil {
		panic(err.Error())
	}

	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("MAIL_USER"))
	m.SetAddressHeader("To", res.Mail, res.FirstName)
	m.SetHeader("Subject", "Merci pour votre Réservation. Nous vous recontacterons très vite.")
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}
