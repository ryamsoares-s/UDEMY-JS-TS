//utilizando o arguments ao invés de parâmetros padrão
// O arguments é uma propriedade de função que contém todos os argumentos passados para a função
// O arguments é um objeto semelhante a um array, mas não é um array real

function soma() {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
}

console.log(soma(1, 2, 3)); // 6
