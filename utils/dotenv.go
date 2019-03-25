package utils

import (
	"log"

	"github.com/alexsasharegan/dotenv"
)

//LoadEnv load .env file at root of the file.
func LoadEnv() {
	err := dotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
}
