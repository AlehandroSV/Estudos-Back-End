// Em JavaScript, funções são blocos de código reutilizáveis que realizam tarefas específicas quando chamados.

// Declaração de uma função com parâmetros:
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

// Chamada da função com argumento:
saudacao("João"); // Saída: "Olá, João!"

// Função que retorna um valor:
function soma(a, b) {
  return a + b;
}

const resultado = soma(3, 5); // Chamada da função e armazenamento do resultado em 'resultado'.
console.log(resultado); // Saída: 8

// Função de seta (arrow function):
const quadrado = (x) => {
  return x * x;
};

const quadradoDeDois = quadrado(2); // Chamada da função de seta.
console.log(quadradoDeDois); // Saída: 4

// Funções podem ter escopo local e acessar variáveis globais:
let variavelGlobal = 10;

function funcaoLocal() {
  let variavelLocal = 5;
  console.log(variavelLocal); // Saída: 5
  console.log(variavelGlobal); // Saída: 10
}

// Variáveis definidas dentro de uma função têm escopo local.
// Variáveis globais podem ser acessadas de qualquer lugar no código.

// Funções podem ser passadas como argumentos para outras funções.
function executarOperacao(operacao, a, b) {
  return operacao(a, b);
}

const resultadoOperacao = executarOperacao(soma, 4, 3); // Passagem da função 'soma' como argumento.
console.log(resultadoOperacao); // Saída: 7

// Funções podem ser atribuídas a variáveis e armazenadas em estruturas de dados.
const minhaFuncao = function () {
  console.log("Isso é uma função armazenada em uma variável.");
};

minhaFuncao(); // Chamada da função armazenada na variável.

// Funções são componentes fundamentais para organizar e reutilizar código em JavaScript.
