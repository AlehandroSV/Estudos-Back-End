// Em JavaScript, variáveis são usadas para armazenar e manipular dados.

// Declarando variáveis usando 'var':
var nome = "João"; // Declaração de variável 'nome' com o valor "João"

// Declarando variáveis usando 'let' (introduzido no ES6):
let idade = 30; // Declaração de variável 'idade' com o valor 30

// Declarando constantes usando 'const':
const pi = 3.14; // Declaração de constante 'pi' com o valor 3.14

// Variáveis podem armazenar diferentes tipos de dados, como números, strings, booleanos e objetos.

// Variáveis podem ser reatribuídas (exceto para constantes):
nome = "Maria"; // Reatribuição da variável 'nome' para "Maria"
idade = 25; // Reatribuição da variável 'idade' para 25

// Variáveis podem ser usadas em expressões:
const resultado = idade * 2; // Usando a variável 'idade' em uma expressão

// Escopo de variáveis:
// 'var' tem escopo de função ou global.
// 'let' e 'const' têm escopo de bloco.
if (true) {
  var variavelVar = "Escopo var";
  let variavelLet = "Escopo let";
}
console.log(variavelVar); // Acessível fora do bloco (var)
// console.log(variavelLet); // Não acessível fora do bloco (let)

// Nomeando variáveis: Use nomes descritivos e siga convenções de nomenclatura.

// Variáveis são componentes fundamentais para armazenar e manipular dados em JavaScript.
