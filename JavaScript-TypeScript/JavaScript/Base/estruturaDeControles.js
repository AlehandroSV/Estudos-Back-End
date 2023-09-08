// Em JavaScript, estruturas de controle são usadas para controlar o fluxo de execução do código.

// Estrutura 'if' para tomar decisões com base em uma condição:
const idade = 18;

if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

// Estrutura 'else if' para lidar com várias condições:
const nota = 75;

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 80) {
  console.log("Aprovado com B");
} else if (nota >= 70) {
  console.log("Aprovado com C");
} else {
  console.log("Reprovado");
}

// Estrutura 'switch' para selecionar um bloco de código com base em uma expressão:
const diaDaSemana = "quarta";

switch (diaDaSemana) {
  case "segunda":
    console.log("Dia de trabalhar");
    break;
  case "quarta":
    console.log("Dia de estudo");
    break;
  default:
    console.log("Dia livre");
}

// Estruturas de repetição 'for' para executar um bloco de código várias vezes:
for (let i = 0; i < 5; i++) {
  console.log(`Contagem: ${i}`);
}

// Estrutura 'while' para repetir enquanto uma condição for verdadeira:
let contador = 0;

while (contador < 3) {
  console.log(`Contagem: ${contador}`);
  contador++;
}

// Estrutura 'do...while' para repetir pelo menos uma vez e continuar enquanto a condição for verdadeira:
let numero = 5;

do {
  console.log(`Número: ${numero}`);
  numero--;
} while (numero > 0);

// Estrutura 'for...of' para percorrer elementos de um array ou iteráveis:
const frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}

// Estrutura 'for...in' para percorrer as propriedades de um objeto:
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2022 };

for (const chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}

// Estruturas de controle são fundamentais para a lógica e o fluxo de execução do seu código em JavaScript.
