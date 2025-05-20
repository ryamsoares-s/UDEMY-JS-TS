// Função classica (hosting)

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3));

// ________________________________________________________

// Função expression (não é possível fazer hosting)

var soma = function (a, b) {
  return a + b;
};
console.log(soma(2, 3));

// ________________________________________________________

// Arrow function (não é possível fazer hosting)

var soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

// ________________________________________________________

// Arrow fuction sem bloco (não é possível fazer hosting)
var soma = (a, b) => a + b;
console.log(soma(2, 3));
