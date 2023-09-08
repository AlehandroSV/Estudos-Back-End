// Em JavaScript, operadores são símbolos ou palavras-chave usados para realizar operações em valores.

// Operadores Aritméticos realizam cálculos numéricos:
const soma = 5 + 3; // Soma: 8
const subtracao = 10 - 4; // Subtração: 6
const multiplicacao = 6 * 2; // Multiplicação: 12
const divisao = 8 / 2; // Divisão: 4
const modulo = 10 % 3; // Módulo (resto da divisão): 1

// Operadores de Atribuição atribuem valores a variáveis:
let x = 5;
x += 3; // x agora é 8 (mesmo que x = x + 3)
x -= 2; // x agora é 6 (mesmo que x = x - 2)
x *= 4; // x agora é 24 (mesmo que x = x * 4)
x /= 3; // x agora é 8 (mesmo que x = x / 3)

// Operadores de Comparação comparam valores e retornam um valor booleano:
const igual = 5 === 5; // Igual a: true
const diferente = 5 !== "5"; // Diferente de: true
const maiorQue = 8 > 5; // Maior que: true
const menorQue = 3 < 7; // Menor que: true
const maiorOuIgual = 10 >= 10; // Maior ou igual a: true
const menorOuIgual = 4 <= 3; // Menor ou igual a: false

// Operadores Lógicos combinam expressões booleanas:
const eLogico = true && false; // AND lógico: false
const ouLogico = true || false; // OR lógico: true
const naoLogico = !true; // NOT lógico: false

// Operadores de Concatenação unem strings:
const nomeCompleto = "João" + " " + "Silva"; // Concatenação de strings: "João Silva"

// Operador Ternário permite fazer uma escolha baseada em uma condição:
const idade = 18;
const status = idade >= 18 ? "Adulto" : "Menor"; // Operador ternário: "Adulto"

// Operadores de Tipo verificam o tipo de dado:
const tipoDeDado = typeof 42; // typeof: "number"

// Operadores de Incremento e Decremento aumentam ou diminuem valores:
let contador = 0;
contador++; // Incremento: contador agora é 1
contador--; // Decremento: contador agora é 0

// Operadores de Bitwise realizam operações em nível de bit (avançado):
const bitE = 5 & 3; // AND bitwise: 1 (101 & 011)
const bitOu = 5 | 3; // OR bitwise: 7 (101 | 011)
const bitXor = 5 ^ 3; // XOR bitwise: 6 (101 ^ 011)

// Os operadores são ferramentas essenciais para realizar ações e tomar decisões em JavaScript.
