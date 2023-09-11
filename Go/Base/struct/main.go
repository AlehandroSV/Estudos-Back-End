package main

import "fmt"

type Carro struct {
	Nome string
}

func (c Carro) andar() {
	fmt.Println(c.Nome, "Andou!")
}

func main() {
	carro := Carro{Nome: "Lancer"}

	carro.andar()
}
