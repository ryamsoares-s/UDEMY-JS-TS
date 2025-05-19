//Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: "Ryam",
  idade: 22,
  endereço: {
    rua: "Av. Antonio Magio",
    bairro: "Parque Santa Cruz",
    num: 415,
    cidade: "Pontes e Lacerda-MT",
  },
};

// console.log(
//   `${pessoa.nome}, possui ${pessoa.idade} anos de idade, e reside na ${pessoa.endereço.rua}, ${pessoa.endereço.num}, ${pessoa.endereço.bairro}, ${pessoa.endereço.cidade}`,
// );

//Usando atribuição via desestruturação (Objetos)
const {
  nome,
  endereço: { cidade },
} = pessoa;

console.log(`${nome} nasceu em ${cidade}`);
