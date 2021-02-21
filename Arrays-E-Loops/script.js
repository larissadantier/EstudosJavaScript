//Arrays
/* É um grupo de valores geralmente relacionados.
Servem para guardarmos diferentes valores em uma 
única variável */

var videoGames = ["Switch", "PS4", "Xbox"];

videoGames[0]; // 'Switch'
videoGames[1]; // 'PS4'

//Acesse um elemento do array utilizando [n]

// Métodos e Propriedades de uma Array
var videoGames2 = ["Switch", "PS4", "Xbox"];

videoGames2.pop(); // Remove o último item e retorna ele
videoGames2.push("3DS"); // Adiciona ao final da array
videoGames2.length; // 3 (quantidade de elementos dentro de uma array)

/* Existem diversos outros métodos,
como map, reduce, forEach e mais
que veremos mais à frente */

// For loop
/* Fazem algo repetidamente
até que uma condição seja atingida */

for (var numero = 0; numero <= 10; numero++) {
  //console.log(numero); // Retorna de 0 a 9 no console
}

//O for loop possui 3 partes, início, condição e incremento

//While Loop
var i = 0;
while (i < 10) {
  //console.log(i);
  i++;
}
//Retorna de 0 a 9 no console
//O for loop é o mais comum

var videoGames3 = ["Switch", "PS4", "Xbox", "3DS"];
for (var i = 0; i < videoGames3.length; i++) {
  //console.log(videoGames3[i]);
}

//Break
//O loop irá parar o caso encontre a palavra break

var videoGames4 = ["Switch", "PS4", "Xbox", "3DS"];
for (var i = 0; i < videoGames4.length; i++){
    //console.log(videoGames4[i]);
    if (videoGames4[i] === 'PS4'){
        break
    }
}

//forEach

/* forEach é um método que executa uma
função para cada item da Array. É uma forma
mais simples de utilizarmos um loop com arrays
(ou array-like) */

var videoGames5 = ["Switch", "PS4", "Xbox", "3DS"];
videoGames5.forEach(function(item){
    console.log(item);
});
// O argumento item será atribuido dinamicamente

/* Podemos passar os seguintes
parâmetros item,index e array */

// Para podermos percorrer um array sem precisar usar o for, podemos usar a função map:

let videoGames5 = ["Switch", "PS4", "Xbox", "3DS"];
videoGames5.map(videoGame => {
  console.log(videoGame)
})
/* resultado:
Switch
PS4
Xbox
3DS
*/
