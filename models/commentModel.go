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

// Commentary Structure of a commentary
type Commentary struct {
	ID         bson.ObjectId `bson:"_id" json:"_id" binding:"required"`
	AuthorName string        `bson:"authorName" json:"authorName" binding:"required"`
	AuthorMail string        `bson:"authorMail" json:"authorMail" binding:"required"`
	Note       int           `bson:"note" json:"note" binding:"required"`
	Message    string        `bson:"message" json:"message" binding:"required"`
	Date       time.Time     `bson:"date" json:"date" binding:"required"`
}

type mailCommentary struct {
	AuthorName string `bson:"authorName" json:"authorName" binding:"required"`
	AuthorMail string `bson:"authorMail" json:"authorMail" binding:"required"`
	Note       int    `bson:"note" json:"note" binding:"required"`
	Message    string `bson:"message" json:"message" binding:"required"`
	Date       string `bson:"date" json:"date" binding:"required"`
}

//Send function send the mail to user
func (com *Commentary) Send() {
	mCom := mailCommentary{
		AuthorMail: com.AuthorMail,
		AuthorName: com.AuthorName,
		Note:       com.Note,
		Message:    com.Message,
		Date:       com.Date.Format(TimeLayout),
	}
	com.sendAdmin(mCom)
	com.sendUser(mCom)
}

func (com *Commentary) sendAdmin(data mailCommentary) {
	//Get html file
	t, err := ioutil.ReadFile("templates/admin/comment.html")
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
	m.SetHeader("From", com.AuthorMail)
	m.SetAddressHeader("To", os.Getenv("ADMIN_MAIL"), "site www.refugehulman.com")
	m.SetHeader("Subject", "Nouveau commentaire le site refugehulman.com")
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}

func (com *Commentary) sendUser(data mailCommentary) {
	//Get html file
	t, err := ioutil.ReadFile("templates/user/comment.html")
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
	m.SetHeader("From", os.Getenv("ADMIN_MAIL"))
	m.SetAddressHeader("To", com.AuthorMail, "site www.refugehulman.com")
	m.SetHeader("Subject", "Merci pour votre commentaire. il est disponible dès maintenant")
	m.SetBody("text/html", buf.String())

	// Send mail
	if err := Dialer.DialAndSend(m); err != nil {
		log.Println("can't send mail: ", err.Error())
	}
}
