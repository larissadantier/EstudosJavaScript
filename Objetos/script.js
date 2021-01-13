// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: "Larissa",
  idade: 19,
  profissao: "Estudante",
  possuiFaculdade: true,
};

pessoa.nome; // 'Larissa'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome (chave) e valor

//Métodos
//É uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação ded area: function() {} para area () {}, no ES6+
var quadrado2 = {
  lados2: 4,
  area(lado2) {
    return lado2 * lado2;
  },
  perimetro(lado2) {
    return this.lados2 * lado2;
  },
  cinco() {
    return 5;
  },
};

// Organizar o Código
//Objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // Número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//Math é um objeto nativo de JavaScript.

// Criar um objeto
//Um objeto é criado utilizando chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// Dot Notaton Get
//Acesse propriedades de um objeto utilizando o ponto .
var menu = {
    width: 800,
    height: 50,
    backgrounColor: '#84E',
};

var bg = menu.backgrounColor; // '#84E'

//Adicionar Propriedades e Métodos
// Basta adicionar um novo nome e definir valor.
var menu2 = {
    width2: 800,
};

menu2.height2 = 50;
menu2.position = 'fixed';

//Palavra-chave this
// this irá fazer uma referência ao próprio objeto.
var height3 = 120;
var menu3 = {
    width3: 800,
    height3: 50,
    metadeHeight() {
        return this.height3 / 2;
    }
};

menu3.metadeHeight(); //25
//sem o this, seria 60
// this irá retornar o próprio objeto