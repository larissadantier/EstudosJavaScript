// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35

// Crie duas expressões que retornem NaN
var frase1 = 'Olá, mundo'
+frase1; // NaN
var frase2 = 'Olá, mundo alternativo'
-frase2 // NaN

// Somar a string '200' com o número 50 e retornar 250
var numeroDuzentos = '200'
console.log(+numeroDuzentos + 50) //250

// Incremente o número 5 e retorne o seu valor incrementado
var numeroCinco = 5;
++numeroCinco
console.log(numeroCinco) //6

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso) // 40kg
