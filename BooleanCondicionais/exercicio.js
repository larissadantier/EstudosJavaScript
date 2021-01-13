// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var inserirIdade = 19;

if(inserirIdade > minhaIdade){
    console.log('É maior');
} else if (inserirIdade == minhaIdade){
    console.log('É igual');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
// É mostrado a última expressão true
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('O Brasil tem mais habitantes')
} else {
  console.log('O Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro'); // true
} else {
  console.log('Falso'); // false
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // 'Cão'
} else {
  console.log('Falso');
}