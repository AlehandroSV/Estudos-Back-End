// Em JavaScript, o tratamento de erros é usado para lidar com exceções e problemas que podem ocorrer durante a execução do código.

// Bloco try...catch: Usado para capturar e lidar com exceções.
try {
  // Código que pode gerar um erro
  const resultado = 10 / 0;
} catch (erro) {
  // Bloco de código que lida com o erro
  console.error("Ocorreu um erro:", erro);
}

// Lançando erros personalizados:
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message);
}

// Bloco finally: Usado para executar código após o bloco try...catch, independentemente de ocorrer um erro ou não.
try {
  // Código que pode gerar um erro
} catch (erro) {
  // Bloco de código que lida com o erro
} finally {
  // Código a ser executado sempre
}

// Exceções nativas em JavaScript incluem TypeError, ReferenceError, SyntaxError, etc.

// Tratamento de erro assíncrono com Promises:
async function operacaoAssincrona() {
  try {
    const resultado = await fazerAlgoAssincrono();
  } catch (erro) {
    console.error("Erro assíncrono:", erro);
  }
}

// O tratamento de erros é fundamental para lidar com exceções de forma controlada e manter a robustez do seu código em JavaScript.
