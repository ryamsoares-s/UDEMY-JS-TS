function format_data(data) {
  const datas = {};

  datas.dia = zero_esquerda(data.getDate());
  datas.mes = zero_esquerda(data.getMonth() + 1); // Para que janeiro então comece sendo 01;
  datas.ano = zero_esquerda(data.getFullYear());

  return `${datas.dia}/${datas.mes}/${datas.ano}`;
}

function zero_esquerda(num1) {
  return num1 > 10 ? num1 : `0${num1}`;
}

const data = new Date();
const data_brasil = format_data(data);
// console.log(data_brasil);
