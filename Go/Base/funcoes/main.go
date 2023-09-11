package main

import "fmt"

func main() {
	resultado := func(x ...int) func() int {

		res := 0

		for _, v := range x {
			res = res + v
		}

		return func() int {
			return res
		}
	}

	fmt.Print(resultado(192871, 1)())
}
