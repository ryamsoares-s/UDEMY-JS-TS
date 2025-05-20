function maior_menor(numeros) {
  var maior = numeros[0];
  var menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return [maior, menor];
}

let numeros = [5, 2, 8, 1, 4];
let [maior, menor] = maior_menor(numeros);
console.log("Maior número: " + maior);
console.log("Menor número: " + menor);
