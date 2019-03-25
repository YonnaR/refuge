package middlewares

import (
	"fmt"
	"le-refuge-back/controllers/actions"
	"os"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
)

//AuthMiddleware check request header for a jwt and check is integrity
func AuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		userToken := c.Request().Header.Get("token")
		if userToken == "" {
			fmt.Println("no token")
		} else {
			token, err := jwt.ParseWithClaims(userToken, &actions.AuthClaims{}, func(token *jwt.Token) (interface{}, error) {
				return []byte(os.Getenv("SECRET")), nil
			})
			if err != nil {
				panic(err)
			}

			if claims, ok := token.Claims.(*actions.AuthClaims); ok && token.Valid {
				c.Response().Header().Set("userId", string(claims.UserID))
				return next(c)
			}
		}
		return c.String(403, "auth denied")
	}

}
