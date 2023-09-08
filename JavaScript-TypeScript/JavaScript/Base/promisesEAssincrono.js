// JavaScript é uma linguagem de programação assíncrona, o que significa que pode executar várias tarefas em paralelo sem bloquear a execução do código.

// Callbacks: Uma forma primitiva de lidar com operações assíncronas é usando callbacks.
function fazerAlgoAssincrono(callback) {
  setTimeout(function () {
    console.log("Operação concluída");
    callback();
  }, 1000);
}

fazerAlgoAssincrono(function () {
  console.log("Tarefa seguinte");
});

// Promises: Promises são uma maneira mais elegante de lidar com operações assíncronas e seu resultado.
function fazerAlgoAssincronoPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Operação concluída");
      resolve();
    }, 1000);
  });
}

fazerAlgoAssincronoPromise()
  .then(function () {
    console.log("Tarefa seguinte");
  })
  .catch(function (erro) {
    console.error("Erro:", erro);
  });

// Async/Await: Async/Await é uma forma mais moderna e legível de trabalhar com Promises.
async function executarTarefas() {
  try {
    await fazerAlgoAssincronoPromise();
    console.log("Tarefa 1 concluída");
    await fazerOutroAssincronoPromise();
    console.log("Tarefa 2 concluída");
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executarTarefas();

// Programação assíncrona é usada para lidar com operações que podem levar tempo, como solicitações de rede, leitura/gravação de arquivos, etc.
// Promises e Async/Await simplificam a lógica assíncrona e tornam o código mais legível e fácil de manter.
