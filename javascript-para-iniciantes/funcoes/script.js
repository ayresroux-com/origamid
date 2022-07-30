function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(20));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(125, 1.71));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de natureza";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita());

function executaFuncao(func) {
  func();
}

executaFuncao(function () {
  console.log("Executando função como parametro");
});
