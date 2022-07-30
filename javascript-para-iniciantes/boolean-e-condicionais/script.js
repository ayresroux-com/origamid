var possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else {
  console.log("Não possui Graduação");
}

var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui Graduação e Doutorado");
} else if (possuiGraduacao) {
  console.log("Possui Graduação mas não possui Doutorado");
} else {
  console.log("Não possui ensino superior");
}

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGraduacao) {
  console.log("Não possui graduação");
}

console.log(!!null);

console.log(10 > 5);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 <= 10);

console.log(10 == "10");
console.log(10 === "10");

var x = "Gato";
console.log(x === "Gato");
console.log(x !== "Gato");
