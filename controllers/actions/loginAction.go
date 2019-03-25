package actions

import (
	"refuge/daos"
	"refuge/utils"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

var Dao *daos.DAO

type AuthClaims struct {
	UserID bson.ObjectId `json:"userId"`
	jwt.StandardClaims
}

func LoginActionEndPoint(c echo.Context) error {
	mail := c.QueryParams().Get("mail")
	user, err := Dao.FindUserByMail(mail)
	if err != nil {
		return c.String(301, "Mail not found")
	}
	if utils.VerifyHash(user.Password, c.QueryParams().Get("password")) {
		key := []byte(os.Getenv("SECRET"))
		// Create the Claims
		claims := AuthClaims{
			user.ID,
			jwt.StandardClaims{
				ExpiresAt: time.Now().Add(time.Minute * 360).Unix(),
				Issuer:    "test",
			},
		}
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		tokens, err := token.SignedString(key)
		if err != nil {
			panic("internal error")
		}
		return c.JSON(200, tokens)
	}
	return c.String(301, "Bad Password")
}
