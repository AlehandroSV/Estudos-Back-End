package main

import (
	"fmt"
)

var name string

func main() {
	name = "Alehandro"
	lastName := "Santos"
	lastName = "Vidal"

	number := 1
	string := "String"
	float := 3.144
	boolean := false

	fmt.Println(name)
	fmt.Println(lastName)
	fmt.Printf("%T\n", number)
	fmt.Printf("%T\n", string)
	fmt.Printf("%T\n", float)
	fmt.Printf("%T\n", boolean)

	fmt.Println(Soma(1, 2))
}

func Soma(a int, b int) int {
	return a + b
}
