//Boolean - Dois valores
var possuiGraduacao = true;
var possuiDoutorado = false;

//Condicionais If e Else
 if(possuiGraduacao){
     console.log('Possui graduação');
 } else {
     console.log('Não possui graduação');
 }
// Retorna Possui Graduação e não executa o else
// O valor dentro dos parênteses sempre será avaliado em false (0) ou true(1).

// Condicionais Else If
//Se o if não for verdadeiro, ele testa o else if
var possuiGraduacao2 = true;
var possuiDoutorado2 = false;

if(possuiDoutorado2){
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao2){
    console.log('Possui graduação, mas não possui doutorado');
} else { 
    console.log('Não possui graduação');
}
//retorna Possui graduação,  mas não possui doutorado

//Truthy e Falsy
//Existem valores que retornam true e outros que retornam false quando verificados
//em uma expressão booleana 
// Falsy
if(false);
if(0); // ou - 0
if(NaN);
if(null);
if(undefined);
if(''); // "" ou  ``

// Truthy
if(true);
if(1);
if(' ');
if('Larissa');
if(-5);
if({});

// Operador lógico de negação ! 
//O operador !, nega uma operação booleana. Ou seja, !true é igual a false
if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
if(!!' '); // true
if(!!''); // false
// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Flasy

//Operadores de comparação
//Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

//Operadores de comparação parte 2
//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja,
// o tipo de dado deve ser o mesmo quando usamos ===

10 == '10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// Operados Lógicos &&
// && Compara se uma expressão e(&&) a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // true 
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
//Se ambos os valores forem true ele ira retornar o último valor
// verificado Se algum valor for false ele irá retornar o mesmo e
// não irá continuar a verificar os próximos

// Operadores Lógicos ||
// || Compara se uma expressão ou(||) outra é verdadeira 
true || true; // true
true || false; // true
false || true // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true
// Retorna o primeiro valor true que encontrar

// Switch 
// Com o switch você pode verificar se uma variável é igual à 
//diferentes valores utilizando o case. Caso ela seja igual, 
//você pode fazer alguma coisa e utilizar a palavra chave break; 
//para cancelar a continuação. O valor de default ocorrerá caso 
//nenhuma das anteriores seja verdadeira.
var corFavorita = 'Azul'; 

switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    default:
        console.log('Feche os olhos')
}