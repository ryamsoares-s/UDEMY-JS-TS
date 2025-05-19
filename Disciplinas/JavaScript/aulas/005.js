// Aula de for of

// For of não pode ser utilizado com object, visto que o mesmo não é itéravel{Array, String} ( não possui indice).

const nome = ["Ryam Soares", "22", "masculino"];

for (let index of nome) {
  // Me retorna os valor do array
  console.log(index);
}
