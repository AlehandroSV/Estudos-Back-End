// Em JavaScript, escopo refere-se ao contexto em que as variáveis e funções são declaradas e acessadas.

// Escopo Global: Variáveis declaradas fora de todas as funções têm escopo global.
const globalVar = "Eu sou global";

function funcaoGlobal() {
  console.log(globalVar); // Acesso a uma variável global
}

funcaoGlobal(); // Chamando a função

// Escopo de Função: Variáveis declaradas dentro de uma função têm escopo de função.
function funcaoLocal() {
  const localVar = "Eu sou local";
  console.log(localVar); // Acesso a uma variável local
}

funcaoLocal(); // Chamando a função

// Variáveis declaradas com 'var' têm escopo de função (ou global se declaradas fora de funções).
function exemploVar() {
  if (true) {
    var varEscopo = "Eu tenho escopo de função (ou global)";
  }
  console.log(varEscopo); // Acesso a uma variável 'var' dentro do bloco
}

exemploVar();

// Escopo de Bloco: Variáveis declaradas com 'let' e 'const' têm escopo de bloco.
function exemploLet() {
  if (true) {
    let letEscopo = "Eu tenho escopo de bloco";
    const constEscopo = "Eu também tenho escopo de bloco";
  }
  // console.log(letEscopo); // Erro: 'letEscopo' não está definido fora do bloco
  // console.log(constEscopo); // Erro: 'constEscopo' não está definido fora do bloco
}

exemploLet();

// Escopo de Função Aninhada: Funções podem ser aninhadas, criando escopo dentro de escopo.
function funcaoExterna() {
  const variavelExterna = "Externa";

  function funcaoInterna() {
    const variavelInterna = "Interna";
    console.log(variavelExterna); // Acesso a variável da função externa
    console.log(variavelInterna); // Acesso a variável da função interna
  }

  funcaoInterna();
}

funcaoExterna();

// Escopo Lexical: Funções aninhadas têm acesso às variáveis de suas funções externas (escopo léxico).
function funcaoExternaLexical() {
  const variavelExterna = "Externa";

  function funcaoInternaLexical() {
    console.log(variavelExterna); // Acesso à variável da função externa (escopo léxico)
  }

  funcaoInternaLexical();
}

funcaoExternaLexical();

// Entender o escopo é crucial para evitar bugs e garantir o acesso adequado às variáveis em JavaScript.
