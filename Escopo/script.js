/* Escopo de Função */
/* Variáveis declaradas dentro
de funções não são acessadas
fora das mesmas */

function mostrarCarro(){
    var carro = 'Fusca'
    console.log(carro)
}

mostrarCarro(); // Fusca
//console.log(carro); //Erro, carro is not defined
//Escopo evita o conflito entre nomes

/* Variável Global (Erro) */
/* Declarar variáveis sem a palavra
chave var, const ou let, cria uma
variável que pode ser acessar em qualquer 
escopo(global). Isso é um erro. */

function mostrarCarro2(){
    carro2 = 'Fusca';
    console.log(carro2);
}

mostrarCarro2() // Fusca
console.log(carro2); // Fusca

/* 'use strict' impede isso  */

/* Escopo de Função (Pai) */
var carro3 = 'Fusca';

function mostrarCarro3(){
    var frase = `Meu carro é um ${carro3}`;
    console.log(frase);
}

mostrarCarro3() // Meu carro é um Fusca
console.log(carro3); // Fusca

/* Escopo de Bloco */
/* Variaveís criadas com var, vazam o bloco.
Por isos com a introdução ES6 a melhor forma
de declaramos uma variável é utilizando
const e let, pois estas respeitam o
escopo de bloco */

if(true){
    var carro4 = 'Fusca';
    console.log(carro4);
}
console.log(carro4); // carro

/* Var vaza o bloco */

/* Mesmo com a condição falsa, a variável
ainda será declarada utilizando hoisting
e o valor ficará como indefined. */

if(false) {
    var carro5 = 'Fusca';
    console.log(carro5);
}

console.log(carro5); // Undefined

/* Const e Let no lugar de Var */
/* Utilizar apenas const e let
para declarar variáveis */

if(true){
    const mes = 'Dezembro';
    console.log(mes);
}

 //console.log(mes); // Erro, carro is not defined

 /* {} criam um escopo de bloco, não
 confundir com a criação de objetos = {} */

 {
     var carro6 = 'Fusca';
     const ano = 2018;
 }

 console.log(carro6); // Fusca
 //console.log(ano); // erro ano is not defined

 /* For Loop */
 /* Ao utilizar var dentro de um for loop,
 que é um bloco, o valor da variável
 utilizada irá vazar e existir fora do loop. */
 for(var i=0; i < 10; i++){
     console.log(`Número ${i}`)
 }

 console.log(i); // 10