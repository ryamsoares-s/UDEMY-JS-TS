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

for (let index in pessoa) {
  // Me retorna as chaves do object
  console.log(index, pessoa[index]);
}
