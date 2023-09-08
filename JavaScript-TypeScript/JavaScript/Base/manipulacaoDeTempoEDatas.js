// JavaScript oferece objetos e métodos para lidar com tempo e datas.

// Obtendo a data atual:
const dataAtual = new Date();

// Obtendo informações da data:
const dia = dataAtual.getDate(); // Dia do mês (1-31)
const mes = dataAtual.getMonth(); // Mês (0-11)
const ano = dataAtual.getFullYear(); // Ano
const hora = dataAtual.getHours(); // Hora (0-23)
const minuto = dataAtual.getMinutes(); // Minuto (0-59)
const segundo = dataAtual.getSeconds(); // Segundo (0-59)
const milissegundo = dataAtual.getMilliseconds(); // Milissegundo

// Criando uma data específica:
const dataEspecifica = new Date(ano, mes, dia, hora, minuto, segundo);

// Formatando datas em uma string:
const dataFormatada = dataAtual.toISOString(); // Formato ISO: "AAAA-MM-DDTHH:mm:ss.sssZ"

// Adicionando ou subtraindo tempo de uma data:
const umDiaDepois = new Date();
umDiaDepois.setDate(dataAtual.getDate() + 1);

const umaHoraAntes = new Date();
umaHoraAntes.setHours(dataAtual.getHours() - 1);

// Calculando a diferença entre duas datas:
const data1 = new Date("2023-12-31");
const data2 = new Date("2023-01-01");
const diferencaEmMilissegundos = data1 - data2;

// Convertendo milissegundos em outras unidades de tempo:
const segundos = diferencaEmMilissegundos / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;
const dias = horas / 24;

// Bibliotecas como o Moment.js (agora descontinuado) ou o date-fns são amplamente usadas para manipulação de datas em JavaScript.

// Manipulação de tempo e datas é importante em aplicativos da web para tarefas como exibição de datas, cálculo de intervalos de tempo, agendamento e muito mais.
