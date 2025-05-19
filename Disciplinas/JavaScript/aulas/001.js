// const data = new Date();
// const ano = data.getFullYear();

// console.log(`Dia atual (em number): ${data.getDate()}`);
// console.log(`Mês (em number): ${data.getMonth()}`); // 0 - Janeiro ... 11 - Dezembro
// console.log(`Ano atual: ${ano}`);
// console.log(`Dia da semana (em number): ${data.getDay()}`); // 0 - Domingo ... 6 - Sabado

function format_data(data) {
  const dia = zero_esquerda(data.getDate());
  const mes = zero_esquerda(data.getMonth() + 1); // Para que janeiro então comece sendo 01;
  const ano = zero_esquerda(data.getFullYear());

  return `${dia}/${mes}/${ano}`;
}

function zero_esquerda(num1) {
  return num1 > 10 ? num1 : `0${num1}`;
}

const data = new Date();
const data_brasil = format_data(data);
console.log(data_brasil);
