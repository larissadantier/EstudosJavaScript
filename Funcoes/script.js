//Funções
//Bloco de código que pode ser executado e reutilizado. Valores podem
//ser passados por uma função e a mesma retorna outro valor
function areaDoQuadrado(lado){
    return lado * lado;
}

areaDoQuadrado(4); // 16
areaDoQuadrado(5); // 25
areaDoQuadrado(2); // 4

//Chamada de function declaration
function pi(){
    return 3.14;
}

var total = 5 * pi(); //15.7
//Parêntes () executam uma função

//Paramêtros e Argumentos
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função você pode passar argumentos.

//peso e altura são os parâmetros
function imc(peso, altura){
    const imc = peso /( altura ** 2);
    return imc;
}

imc(80, 1.80); //80 e 1.80 são argumentos
imc(60, 1.70);//60 e 1.70 são argumentos
//Separar por vírgula cada parâmetro. Você pode definir mais de um
//parâmetro ou nenhum também.

//Parênteses executa a função
function corFavorita(cor){
    if (cor === 'azul') {
        return 'Você gosta do céu';
    } else if (cor === 'verde') {
        return'Você gosta de grama';
    } else {
        return 'Você não gosta de nada';
    }
}

corFavorita() // retorna 'Você não gosta de nada'
//Se apenas definirmos a função com function e não executarmos a mesma,
// nada que estiver dentro dela irá acontecer

//Argumentos podem ser funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function(){
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro a string 'click'
// Segundo é uma função anômima
//Funções anônimas são aquelas em que o nome da função não é definido,
//escritas como function() {} ou () => {}

//Pode ou não retornar um valor
//Quando não definimos o return, ela irá retornar undefined.
//O código interno da função é executado normalmente, independente
//de existir valor de return ou não
function imc2(peso, altura){
    const imc2 = peso / (altura ** 2);
    console.log(imc2);
}

imc2(80, 1.80); // retorna o imc2
console.log(imc2(80, 1.80)); // retorna o imc2 e undefined

// Valores retornados
// Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe a sua idade!';
    } else if(idade >= 60) {
        return true;
    } else { 
        return false;
    }
}
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

//Escopo
//Variáveis e funções definidas dentro de um bloco {},
// não são visíveis fora dele
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} para visitar`;
}

//console.log(totalPaises)//Erro, totalPaises não definido
console.log(precisoVisitar(40)) // 153

//Escopo Léxico
//Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Estudante';

function dados(){
    var nome = 'Larissa';
    var idade = 19;
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // Retorna 'Larissa, 19, Rio de Janeiro, Estudante'
//outrosDados(); // Retorna um erro

//Hoisting 
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
imc3(80, 1.80); //imc aparece no console

function imc3(peso, altura){
    const imc3 = peso / (altura ** 2 );
    console.log(imc3);
}