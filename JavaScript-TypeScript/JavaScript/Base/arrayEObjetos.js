// Arrays e Objetos são estruturas de dados fundamentais em JavaScript para armazenar informações de diferentes maneiras.

// Arrays: Usados para armazenar listas ordenadas de valores.
const frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array por índice:
console.log(frutas[0]); // Saída: "maçã"

// Modificando elementos do array por índice:
frutas[1] = "pêra";

// Obtendo o comprimento do array:
const tamanho = frutas.length; // Comprimento: 3

// Adicionando elementos ao final do array:
frutas.push("uva");

// Removendo o último elemento do array:
const ultimoElemento = frutas.pop();

// Objetos: Usados para criar coleções de pares de chave-valor.
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

// Acessando propriedades do objeto por chave:
console.log(pessoa.nome); // Saída: "João"

// Modificando propriedades do objeto por chave:
pessoa.idade = 31;

// Adicionando novas propriedades ao objeto:
pessoa.profissao = "Engenheiro";

// Deletando propriedades do objeto:
delete pessoa.cidade;

// Verificando se uma chave existe no objeto:
const temProfissao = "profissao" in pessoa; // Retorna true

// Iterando por propriedades de objetos com um loop 'for...in':
for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// Arrays e Objetos são flexíveis e versáteis, permitindo que você organize e manipule dados de várias maneiras em JavaScript.
