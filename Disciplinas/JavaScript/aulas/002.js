//Atribuição via desestruturação (Arrays)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [num1, num2, ...resto] = numeros; // Estou atribuindo os 2 primeiros indeces do Array a variaveis const.
// Adiciono todos o resto (fora o indece 0 e 1 do Array) a varial "resto".

console.log(resto);
console.log(num1, num2);
console.log(numeros);

// ____________________________________________________________________________________________

const lojas = [
  ["Xiaomi", "Celular"],
  ["Toyota", "Carros"],
  ["Frutos", "Sorvetes"],
]; // Array dentro de array.

const [loja_celular, Montadora, Sorveteria] = lojas;

console.log(` A loja ${loja_celular[0]} vende ${loja_celular[1]}`);
