// function somar() {
//   // format_number(num1, num2);
//   let num1 = parseInt(document.getElementById("num1").value);
//   let num2 = parseInt(document.getElementById("num2").value);
//   let resultado = num1 + num2;

//   if (isNaN(num1) || isNaN(num2)) {
//     alert("Por favor, insira números válidos.");
//   } else if (num1 < 0 && num2 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `(${num1}) + (${num2}) = (${resultado})`;
//   } else if (resultado < 0 && num1 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `(${num1}) + ${num2} = (${resultado})`;
//   } else if (resultado < 0 && num2 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `${num1} + (${num2}) = (${resultado})`;
//   } else if (num1 < 0 && num2 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `(${num1}) + (${num2}) = ${resultado}`;
//   } else if (resultado < 0) {
//     document.getElementById("resultado").innerHTML =
//       `${num1} + ${num2} = (${resultado})`;
//   } else if (num1 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `(${num1}) + ${num2} = ${resultado}`;
//   } else if (num2 < 0) {
//     document.getElementById("resultado").innerHTML =
//       `${num1} + (${num2}) = ${resultado}`;
//   } else {
//     // Caso padrão: Se não houver números negativos ou nenhuma outra condição for atendida, exibe o resultado normalmente
//     document.getElementById("resultado").innerHTML =
//       `${num1} + ${num2} = ${resultado}`;
//   }
// }

// Código otimizado

function somar() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = num1 + num2;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  let num1Str = num1 < 0 ? `(${num1})` : num1;
  let num2Str = num2 < 0 ? `(${num2})` : num2;
  let resultadoStr = resultado < 0 ? `(${resultado})` : resultado;

  document.getElementById("resultado").innerHTML =
    `${num1Str} + ${num2Str} = ${resultadoStr}`;
}
