// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque 'É maior', 'É igual' e 'É menor'
var minhaIdade = 29;
var idadePai = 56;

if (minhaIdade > idadePai) {
  console.log("Sou mais velhor que meu pai");
} else if (minhaIdade < idadePai) {
  console.log("Sou mais novo que meu pai");
} else {
  console.log("Tenho a mesma idade que meu pai");
}

// Verifique se as seguintes variáveis são TRUE ou FALSE
var nome = "André";
console.log(!!nome);
var idade = 28;
console.log(!!idade);
var possuiDoutorado = false;
console.log(!!possuiDoutorado);
var empregoFuturo;
console.log(!!empregoFuturo);
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta);

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
