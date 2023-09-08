// Em JavaScript, você pode armazenar dados de várias maneiras, dependendo dos requisitos do seu aplicativo.

// 1. Variáveis: Use variáveis para armazenar dados temporários em tempo de execução.
const nome = "João";
let idade = 30;

// 2. Arrays: Use arrays para armazenar listas ordenadas de valores.
const frutas = ["maçã", "banana", "laranja"];

// 3. Objetos: Use objetos para criar coleções de pares de chave-valor.
const pessoa = {
  nome: "Maria",
  idade: 25,
  cidade: "São Paulo",
};

// 4. Cookies: Use cookies para armazenar pequenas quantidades de dados no navegador do usuário.
document.cookie =
  "username=joao; expires=Fri, 31 Dec 2023 23:59:59 UTC; path=/";

// 5. Web Storage: Use o localStorage e o sessionStorage para armazenar dados no navegador com um limite de tamanho maior do que os cookies.
localStorage.setItem("chave", "valor");
const valor = localStorage.getItem("chave");

// 6. IndexedDB: Use o IndexedDB para armazenar dados estruturados no navegador, adequado para aplicativos da web que precisam de armazenamento de dados offline.
// Exemplo de uso do IndexedDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

// 7. Armazenamento em Servidor: Para armazenar dados persistentes em um servidor, você pode usar tecnologias como bancos de dados SQL (por exemplo, MySQL) ou NoSQL (por exemplo, MongoDB) e fazer solicitações HTTP (AJAX, fetch) para interagir com o servidor.

// A escolha do método de armazenamento depende dos requisitos do seu aplicativo, do tamanho e sensibilidade dos dados, e das necessidades de persistência e compartilhamento.
