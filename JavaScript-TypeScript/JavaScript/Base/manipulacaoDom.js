// O DOM (Documento Object Model) é uma representação em árvore da estrutura de uma página da web, permitindo que você acesse e manipule elementos HTML e seus atributos usando JavaScript.

// Selecionando elementos HTML:
const elemento = document.getElementById("idDoElemento"); // Seleção por ID
const elementos = document.getElementsByClassName("classeDoElemento"); // Seleção por classe
const elementosTag = document.getElementsByTagName("tagDoElemento"); // Seleção por tag
const elementoQuery = document.querySelector("#seletorCSS"); // Seleção por seletor CSS
const elementosQuery = document.querySelectorAll(".seletorCSS"); // Seleção múltipla por seletor CSS

// Acessando e modificando conteúdo de elementos:
elemento.textContent = "Novo conteúdo"; // Define o conteúdo de texto
elemento.innerHTML = "<strong>Texto em negrito</strong>"; // Define o conteúdo HTML
elemento.value = "Novo valor"; // Define o valor de elementos de formulário

// Modificando atributos de elementos:
elemento.setAttribute("nomeDoAtributo", "novoValor"); // Define um atributo
const valorAtributo = elemento.getAttribute("nomeDoAtributo"); // Obtém o valor de um atributo

// Adicionando e removendo classes CSS:
elemento.classList.add("classe"); // Adiciona uma classe
elemento.classList.remove("classe"); // Remove uma classe
elemento.classList.toggle("classe"); // Adiciona ou remove uma classe com base em sua presença

// Manipulando eventos:
elemento.addEventListener("click", function () {
  // Código a ser executado quando o elemento for clicado
});

// Criando e anexando elementos HTML:
const novoElemento = document.createElement("tag"); // Cria um novo elemento
elemento.appendChild(novoElemento); // Anexa o novo elemento a outro elemento

// Removendo elementos HTML:
elemento.removeChild(elementoFilho); // Remove um elemento filho

// O DOM permite que você interaja com elementos HTML e crie interfaces de usuário dinâmicas em páginas da web.
