package model

type Produto struct {
	ID    string `json:"id"`
	NOME  string `json:"nome"`
	ATIVO bool   `json:"ativo"`
}