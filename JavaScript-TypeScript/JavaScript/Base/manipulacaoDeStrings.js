// Em JavaScript, strings são usadas para representar texto e podem ser manipuladas de várias maneiras.

// Declarando uma string:
const texto = "Isso é uma string";

// Obtendo o comprimento de uma string:
const comprimento = texto.length; // Comprimento: 17

// Acessando caracteres em uma string por índice (índices baseados em zero):
const primeiroCaractere = texto[0]; // Primeiro caractere: "I"
const ultimoCaractere = texto[texto.length - 1]; // Último caractere: "g"

// Concatenando strings:
const parte1 = "Olá, ";
const parte2 = "mundo!";
const saudacao = parte1 + parte2; // Resultado: "Olá, mundo!"

// Usando template literals (interpolação de strings):
const nome = "Maria";
const idade = 25;
const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;

// Separando uma string em substrings com o método split():
const frase = "Isso é uma frase";
const palavras = frase.split(" "); // Resultado: ["Isso", "é", "uma", "frase"]

// Juntando substrings em uma única string com o método join():
const arrayDePalavras = ["Isso", "é", "uma", "frase"];
const novaFrase = arrayDePalavras.join(" "); // Resultado: "Isso é uma frase"

// Transformando texto em letras maiúsculas e minúsculas:
const maiusculas = texto.toUpperCase(); // Transforma em maiúsculas
const minusculas = texto.toLowerCase(); // Transforma em minúsculas

// Encontrando a posição de uma substring em uma string com o método indexOf():
const textoCompleto = "Isso é uma string completa";
const posicao = textoCompleto.indexOf("uma"); // Resultado: 8

// Substituindo substrings em uma string com o método replace():
const novaString = textoCompleto.replace("completa", "alterada"); // Resultado: "Isso é uma string alterada"

// Verificando se uma string começa ou termina com uma substring com os métodos startsWith() e endsWith():
const comecaCom = textoCompleto.startsWith("Isso"); // Retorna true
const terminaCom = textoCompleto.endsWith("completa"); // Retorna false

// Strings em JavaScript são imutáveis, o que significa que os métodos de manipulação de strings retornam novas strings em vez de modificar a string original.

// A manipulação de strings é amplamente usada para processar texto em aplicativos da web e é uma parte fundamental da programação em JavaScript.
