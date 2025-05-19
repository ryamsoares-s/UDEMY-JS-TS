const data = new Date();
const datas = {};

datas.dia = data.getDate();
datas.mes = data.getMonth(); // Para que janeiro então comece sendo 01;
datas.ano = data.getFullYear();
datas.dia_da_sem = data.getDay();

switch (datas.dia_da_sem) {
  case 0:
    console.log(`${datas.dia_da_sem} - Domingo`);
    break;

  case 1:
    console.log(`${datas.dia_da_sem} - Segunda`);
    break;
  case 2:
    console.log(`${datas.dia_da_sem} - Terça`);
    break;
  case 3:
    console.log(`${datas.dia_da_sem} - Quarta`);
    break;
  case 4:
    console.log(`${datas.dia_da_sem} - Quinta`);
    break;
  case 5:
    console.log(`${datas.dia_da_sem} - Sexta`);
    break;
  case 6:
    console.log(`${datas.dia_da_sem} - Sábado`);
    break;
}
