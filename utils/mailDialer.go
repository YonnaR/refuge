package utils

import (
	"log"
	"os"
	"strconv"

	gomail "gopkg.in/gomail.v2"
)

func GetDialer() *gomail.Dialer {
	port, err := strconv.Atoi(os.Getenv("SMTP_PORT"))
	if err != nil {
		log.Fatal("bad SMTP PORT")
	}
	return gomail.NewDialer(os.Getenv("SMTP"), port, os.Getenv("MAIL_USER"), os.Getenv("MAIL_PASS"))
}
