package main

import (
	"errors"
	"fmt"
	"log"
)

func main() {
	// res, err := http.Get("http://google.com.br")
	// if err != nil {
	// 	log.Fatal(err)
	// } else {
	// 	fmt.Print(res)
	// }

	res, err := soma(1, 9)
	if err != nil {
		log.Fatal(err.Error())
	} else {
		fmt.Print(res)
	}
}

func soma(x int, y int) (int, error) {
	res := x + y

	if res > 10 {
		return 0, errors.New("Total maior que 10")
	}

	return res, nil
}
