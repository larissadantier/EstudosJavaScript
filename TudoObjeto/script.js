// Tudo é Objeto

//Strings, Números, Boolean, Objetos e mais, possuem propriedades
// e métodos. Por isso são objetos.
var nome = 'Larissa';

nome.length; // 7 (Me dá o total de caracteres)
nome.charAt(1); // 'a'
nome.replace('ssa', 'sa'); // 'Larisa' Substitiui o ssa para sa
nome; //'Larissa'

//Uma string herda propriedades e métodos do construtor String()

// Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

/*Por um breve momento o número é
envolvido em um Objeto (coerção), tendo acesso 
assim as suas propriedades e métodos  */

//Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') //Adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
    console.log('Clicou')
})

/* Praticamente todos os efeitos com JS
são feitos utilizazndo propriedades e métodos
de objetos do DOM */