package utils

import "golang.org/x/crypto/bcrypt"

//GenerateHash (password) => return hashed password
func GenerateHash(password string) string {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.MinCost)
	if err != nil {
		panic("internal error")
	}
	return string(hash)
}

// VerifyHash ( hash , password ) => true or false
func VerifyHash(hash string, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	if err != nil {
		return false
	}
	return true

}
