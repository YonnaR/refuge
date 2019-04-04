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

// Reservation is structure of a reservation
type Reservation struct {
	ID        bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	FirstName string        `bson:"firstName" json:"firstName" binding:"required"`
	LastName  string        `bson:"lastName" json:"lastName" binding:"required"`
	Mail      string        `bson:"mail" json:"mail" binding:"required"`
	Tel       int           `bson:"tel" json:"tel" binding:"required"`
	Adults    int           `bson:"adults" json:"adults" binding:"required"`
	Childrens int           `bson:"childrens" json:"childrens" binding:"required"`
	StartDate string        `bson:"startDate" json:"startDate" binding:"required"`
	EndDate   string        `bson:"endDate" json:"endDate" binding:"required"`
	Message   string        `bson:"message" json:"message" binding:"required"`
	Date      time.Time     `bson:"date" json:"date" binding:"required"`
}

type mailReservation struct {
	FirstName string `bson:"firstName" json:"firstName" binding:"required"`
	LastName  string `bson:"lastName" json:"lastName" binding:"required"`
	Mail      string `bson:"mail" json:"mail" binding:"required"`
	Tel       int    `bson:"tel" json:"tel" binding:"required"`
	Adults    int    `bson:"adults" json:"adults" binding:"required"`
	Childrens int    `bson:"	" json:"childrens" binding:"required"`
	StartDate string `bson:"startDate" json:"startDate" binding:"required"`
	Message   string `bson:"message" json:"message" binding:"required"`
	EndDate   string `bson:"endDate" json:"endDate" binding:"required"`
	Date      string `bson:"date" json:"date" binding:"required"`
}

//Send function send the mail to user
func (res *Reservation) Send() {
	mRes := mailReservation{
		FirstName: res.FirstName,
		LastName:  res.LastName,
		Adults:    res.Adults,
		Childrens: res.Childrens,
		Mail:      res.Mail,
		Message:   res.Message,
		Tel:       res.Tel,
		Date:      res.Date.Format(TimeLayout),
		EndDate:   res.EndDate,
		StartDate: res.StartDate,
	}
	res.sendAdmin(mRes)
	res.sendUser(mRes)
}

func (res *Reservation) sendAdmin(data mailReservation) {
	//Get html file
	t, err := ioutil.ReadFile("templates/admin/reservation.html")
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
	m.SetAddressHeader("To", os.Getenv("MAIL_USER"), "site www.refugehulman.com")
	m.SetHeader("Subject", "Nouvelle Réservation sur le site")
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}

func (res *Reservation) sendUser(data mailReservation) {
	//Get html file
	t, err := ioutil.ReadFile("templates/user/reservation.html")
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
