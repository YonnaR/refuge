package daos

import (
	"le-refuge-back/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	MailCollection = "mails"
)

func (m *DAO) FindAllMails() ([]models.Mail, error) {
	var mails []models.Mail
	err := db.C(MailCollection).Find(bson.M{}).Sort("-date").All(&mails)
	return mails, err
}

func (m *DAO) FindMailById(id string) (models.Mail, error) {
	var mail models.Mail
	err := db.C(MailCollection).FindId(bson.ObjectIdHex(id)).One(&mail)
	return mail, err
}

func (m *DAO) InsertMail(mail models.Mail) error {
	err := db.C(MailCollection).Insert(&mail)
	return err
}

func (m *DAO) DeleteMail(id string) error {
	err := db.C(MailCollection).RemoveId(id)
	return err
}

func (m *DAO) UpdateMail(mail models.Mail) error {
	err := db.C(MailCollection).UpdateId(mail.ID, &mail)
	return err
}
