//Números
var idade = 28;
var gols = 1000;
var pi = 3.14;
var exp = 2e10

//Operadores Aritméticos
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 **4; //16
var modulo = 14 % 5; //4
//Soma + em string serve para concatenar

//Operadores Aritméticos (Strings)
var soma2 = '100' + 50;
var subtracao2 = '100' - 50;
var multiplicacao2 = '100' * 2;
var divisao2 = 'Comprei 10' / 2;
//É possível verificar se uma variável é NaN ou não com função isNaN()

// NaN = Not a number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

//Importante a ordem
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; //40 
//Parênteses para priorizar uma expressão

// Operadores Aritméticos Unários (apenas 1 número)
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento) // 6

var decremento = 5;
console.log(decremento--); // 6
console.log(decremento);  // 4

//O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 (converteu a string da idade pra number)

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// O - antes de um número retorna negativo