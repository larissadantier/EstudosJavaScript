// Crie uma função para verificar se um valor é Truthy
function menorDeIdade(dado){
    return !!dado;
}
console.log(menorDeIdade(17)) // true
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
    return lado + lado + lado + lado;
}
console.log(perimetroQuadrado(10)) // 40

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    nome = 'Larissa';
    sobrenome = 'Dantier';
    return `O seu nome completo é ${nome + ' ' + sobrenome}`;
}
console.log(nomeCompleto());
// Crie uma função que verifica se um número é par
function verificarPar(numero){
    if (numero % 2 === 0){
        return 'É par';
    } else {
        return 'É impar';
    }
}
console.log(verificarPar(12)); // 'É par'
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function returnType(dados){
    if (typeof dados === 'number'){
        return 'É um number';
    } else if (typeof dados === 'string'){
        return 'É uma string';
    }
}

console.log(returnType('Olá')) // 'É uma string'
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
    console.log('Larissa Dantier');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20); //Corrigido 'Já visitei 20 do total de 193 países'

  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
