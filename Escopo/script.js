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

/* Escopo evita o conflito entre nomes */

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
console.log(carro); // Fusca