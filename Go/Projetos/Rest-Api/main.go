package main

import (
	model "exemplo/rest-api/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

var produtos = []model.Produto{
	{ID: "7319827398123", NOME: "Teste", ATIVO: true},
}

func hello(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"message": "Meu primeiro endpoint GET em GoLang!",
	})
}

func getProdutos(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, produtos)
}

func addProduto(ctx *gin.Context) {
	var produto model.Produto

	ctx.BindJSON(&produto)

	produtos = append(produtos, produto)

	ctx.JSON(http.StatusCreated, gin.H{"message": "Novo produto criado com sucesso!"})
}

func alterProduto(ctx *gin.Context) {
	id := ctx.Param("id")
	var produto model.Produto

	ctx.BindJSON(&produto)


	for i, item := range produtos {
		if item.ID == id {
			produto.ID = id

			produtos[i] = produto

			ctx.JSON(http.StatusOK, gin.H{"message": "Produto alterado!"})
			return
		}
	}

	ctx.JSON(http.StatusNotFound, gin.H{"message": "Produto não encontrado!"})
}

func removeProduto(ctx *gin.Context) {
	id := ctx.Param("id")
	
	for i, item := range produtos {
		if item.ID == id {
			produtos = append(produtos[:i], produtos[i+1:]...)

			ctx.JSON(http.StatusOK, gin.H{"message": "Produto removido com sucesso"})
            return
		}
	}

	ctx.JSON(http.StatusNotFound, gin.H{"message": "Produto não encontrado!"})
}

func main() {
	router := gin.Default()

	router.GET("/", hello)
	router.GET("/produtos", getProdutos)
	router.POST("/produto", addProduto)
	router.PUT("/produto/:id", alterProduto)
	router.DELETE("/produto/:id", removeProduto)

	router.Run()
}