package daos

import (
	"le-refuge-back/models"

	"gopkg.in/mgo.v2/bson"
)

const (
	CommentCollection = "commentaries"
)

func (m *DAO) FindAllComments() ([]models.Commentary, error) {
	var comments []models.Commentary
	err := db.C(CommentCollection).Find(bson.M{}).Sort("-date").All(&comments)
	return comments, err
}

func (m *DAO) FindCommentById(id string) (models.Commentary, error) {
	var comment models.Commentary
	err := db.C(CommentCollection).FindId(bson.ObjectIdHex(id)).One(&comment)
	return comment, err
}

func (m *DAO) InsertComment(comment models.Commentary) error {
	err := db.C(CommentCollection).Insert(&comment)
	return err
}

func (m *DAO) DeleteComment(id string) error {
	err := db.C(CommentCollection).RemoveId(id)
	return err
}

func (m *DAO) UpdateComment(comment models.Commentary, id string) error {
	err := db.C(CommentCollection).UpdateId(id, &comment)
	return err
}
