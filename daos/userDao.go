package daos

import (
	"refuge/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	userCollection = "users"
)

func (m *DAO) FindAllUsers() ([]models.User, error) {
	var users []models.User
	err := db.C(userCollection).Find(bson.M{}).Sort("-date").All(&users)
	return users, err
}

func (m *DAO) FindUserById(id string) (models.User, error) {
	var user models.User
	err := db.C(userCollection).FindId(bson.ObjectIdHex(id)).One(&user)
	return user, err
}

func (m *DAO) FindUserByMail(mail string) (models.User, error) {
	var user models.User
	err := db.C(userCollection).Find(bson.M{"mail": mail}).One(&user)
	return user, err
}

func (m *DAO) InsertUser(user models.User) error {
	err := db.C(userCollection).Insert(&user)
	return err
}

func (m *DAO) DeleteUser(id string) error {
	err := db.C(userCollection).RemoveId(id)
	return err
}

func (m *DAO) UpdateUser(user models.User) error {
	err := db.C(userCollection).UpdateId(user.ID, &user)
	return err
}
