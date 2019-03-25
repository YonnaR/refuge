package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

//User is structure of an user
type User struct {
	ID        bson.ObjectId `bson:"_id,omitempty" json:"_id,omitempty" binding:"required"`
	FirstName string        `bson:"firstName,omitempty" json:"firstName,omitempty" binding:"required"`
	LastName  string        `bson:"lastName,omitempty" json:"lastName,omitempty" binding:"required"`
	Mail      string        `bson:"mail,omitempty" json:"mail,omitempty" binding:"required"`
	Password  string        `bson:"password,omitempty" json:"password,omitempty" binding:"required"`
	Created   time.Time     `bson:"created,omitempty" json:"created,omitempty" binding:"required"`
}
