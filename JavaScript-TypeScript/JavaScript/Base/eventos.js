// Em JavaScript, eventos são ações ou ocorrências que acontecem em resposta a ações do usuário ou outras interações no navegador.

// Adicionando um ouvinte de evento a um elemento HTML:
const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function () {
  console.log("Botão clicado!");
});

// Removendo um ouvinte de evento:
botao.removeEventListener("click", nomeDaFuncao);

// Tipos comuns de eventos:
// 1. Eventos de clique: 'click', 'dblclick'
// 2. Eventos de mouse: 'mouseover', 'mouseout', 'mousemove'
// 3. Eventos de teclado: 'keydown', 'keyup', 'keypress'
// 4. Eventos de formulário: 'submit', 'input', 'change'
// 5. Eventos de foco: 'focus', 'blur'
// 6. Eventos de carregamento: 'load', 'DOMContentLoaded'
// 7. Eventos de temporizador: 'setTimeout', 'setInterval'

// Eventos podem ser disparados automaticamente usando funções:
function dispararEvento() {
  const evento = new Event("click");
  botao.dispatchEvent(evento);
}

// Eventos também podem ser usados com funções de retorno de chamada:
botao.addEventListener("mouseover", function () {
  console.log("Mouse sobre o botão!");
});

// Além disso, bibliotecas como jQuery simplificam o gerenciamento de eventos.

// Eventos são fundamentais para criar interatividade em páginas da web e responder às ações do usuário.
