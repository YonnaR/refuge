package models

import (
	"bytes"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"os"
	"time"

	gomail "gopkg.in/gomail.v2"
	"gopkg.in/mgo.v2/bson"
)

//TimeLayout is how the date should be displayed
const TimeLayout = "2 Jan, 2006 à 3:04pm (MST)"

// Mail is Structure of a mail
type Mail struct {
	ID      bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	Name    string        `bson:"name" json:"name" binding:"required"`
	Tel     int           `bson:"tel" json:"tel" binding:"required"`
	From    string        `bson:"from" json:"from" binding:"required"`
	To      string        `bson:"to" json:"to" binding:"required"`
	Subject string        `bson:"subject" json:"subject" binding:"required"`
	Message string        `bson:"message" json:"message" binding:"required"`
	Date    time.Time     `bson:"date" json:"date" binding:"required"`
}

type mailMail struct {
	From    string `bson:"from" json:"from" binding:"required"`
	To      string `bson:"to" json:"to" binding:"required"`
	Name    string `bson:"name" json:"name" binding:"required"`
	Tel     int    `bson:"tel" json:"tel" binding:"required"`
	Subject string `bson:"subject" json:"subject" binding:"required"`
	Message string `bson:"message" json:"message" binding:"required"`
	Date    string `bson:"date" json:"date" binding:"required"`
}

//Send function send the mail to user
func (mail *Mail) Send() {
	data := mailMail{
		From:    mail.From,
		Subject: mail.Subject,
		Message: mail.Message,
		Date:    mail.Date.Format(TimeLayout),
	}
	mail.sendAdmin(data)
	mail.sendUser(data)
}

func (mail *Mail) sendAdmin(data mailMail) {

	//Get html file
	t, err := ioutil.ReadFile("templates/admin/mail.html")
	if err != nil {
		log.Println(err.Error())
	}
	buf := &bytes.Buffer{}
	//generate/parse/exec template
	tmpl := template.New("mail")
	tmpl.Parse(string(t))
	tmpl.Execute(buf, data)
	if err != nil {
		fmt.Println(err.Error())
	}

	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("MAIL_USER"))
	m.SetAddressHeader("To", "refugehulman@gmail.com", "site www.refugehulman.com")
	m.SetHeader("Subject", "Demande de renseignements : "+data.Subject)
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}

func (mail *Mail) sendUser(data mailMail) {
	//Get html file
	t, err := ioutil.ReadFile("templates/user/mail.html")
	if err != nil {
		log.Println(err.Error())
	}
	buf := &bytes.Buffer{}
	//generate/parse/exec template
	tmpl := template.New("mail")
	tmpl.Parse(string(t))
	tmpl.Execute(buf, data)
	if err != nil {
		fmt.Println(err.Error())
	}

	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("MAIL_USER"))
	m.SetAddressHeader("To", data.From, "site www.refugehulman.com")
	m.SetHeader("Subject", "Validation de votre demande de renseignements : "+data.Subject)
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail : ", err.Error())
	}
}
