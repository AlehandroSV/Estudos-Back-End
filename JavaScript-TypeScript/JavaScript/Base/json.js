// JSON (JavaScript Object Notation) é um formato de dados leve e legível por humanos que é comumente usado para trocar dados entre um servidor e um cliente ou armazenar configurações e informações estruturadas.

// Exemplo de um objeto JavaScript:
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

// Convertendo um objeto JavaScript em uma string JSON:
const jsonPessoa = JSON.stringify(pessoa);

// Saída do JSON:
// '{"nome":"João","idade":30,"cidade":"São Paulo"}'

// Convertendo uma string JSON em um objeto JavaScript:
const objetoPessoa = JSON.parse(jsonPessoa);

// Usando JSON com arrays:
const frutas = ["maçã", "banana", "laranja"];

const jsonFrutas = JSON.stringify(frutas);

// Saída do JSON:
// '["maçã","banana","laranja"]'

const arrayFrutas = JSON.parse(jsonFrutas);

// JSON é usado para enviar dados entre o servidor e o cliente em APIs RESTful e é amplamente usado em armazenamento de configurações e transferência de dados estruturados.

// Observe que apenas dados podem ser serializados em JSON; funções não podem ser incluídas.
