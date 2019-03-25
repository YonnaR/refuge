package models

import (
	"os"

	gomail "gopkg.in/gomail.v2"
)

//Dialer is the SMTP dialer
var Dialer *gomail.Dialer

// AdminMail is the administrator mail
var AdminMail = os.Getenv("ADMIN_MAIL")
