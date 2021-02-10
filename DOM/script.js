/* DOM */
/* É um interface que representa documentos HTML e XML
através de objetos. Com ela é possível manipular
a estrutura, estilo e conteúdo destes documentos */

console.log(window);
// Window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

/* So inspecionar elemento com o
navegador, você está vendo a 
representação oficial do DOM */

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/DOM/'){
    console.log('É igual')
}

// Window e Document

/* São os objetos principais do DOM,
boa parte da manipulação é feita
através dos seus métodos e propriedades. */

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; //Retorna o body

const h1Selecionado = document.querySelector('h1');

/* Window é o objeto global, por isso
não precisamos chamar ele na frente
dos seus métodos e propriedades */







