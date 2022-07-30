function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "Por favor, preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("60"));

function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(faltaVisitar(20));

var profissao = "Designer";

function dados() {
  let nome = "André";
  let idade = 28;
  function outrosDados() {
    let endereco = "Rio de Janeiro";
    let idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
//outrosDados(); // retorna um erro
