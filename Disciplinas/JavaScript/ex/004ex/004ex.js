function numeros(num1) {
  if (num1 === "number") {
    return "Por favor, insira um número.";
  } else if (num1 % 3 === 0 && num1 % 5 === 0) {
    return "FizzBuzz";
  } else if (num1 % 3 === 0) {
    return "Fizz";
  } else if (num1 % 5 === 0) {
    return "Buzz";
  } else {
    return num1;
  }
}

console.log(numeros(15));

for (let i = 1; i <= 100; i++) {
  console.log(numeros(i));
}
