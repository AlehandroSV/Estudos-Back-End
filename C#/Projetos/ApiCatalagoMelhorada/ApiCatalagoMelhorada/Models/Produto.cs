﻿namespace ApiCatalagoMelhorada.Models;

public class Produto {
    public int PodutoId { get; set; }
    public string? Nome { get; set; }
    public string? Descricao { get; set; }
    public decimal Preco { get; set; }
    public string? Image { get; set; }
    public DateTime DataCompra { get; set; }
    public int Estoque { get; set; }

    public int CategoriaId { get; set; }
    public Categoria? Categoria { get; set; }
}
