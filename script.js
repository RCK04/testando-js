/* function validar(CorrectUser, CorrectPassWord){

    let usuario = 'pedro'
    let senha = '123'

    if(usuario != CorrectUser || senha != CorrectPassWord){
        console.log('Acesso NEGADO')
    } else{
        console.log('Acesso Concedido')
    }
}

let UserName = 'pedro'
let UserPassWord = '123'

let validacao = validar(UserName, UserPassWord)



function validar(usuario, senha){
    if(usuario === 'pedro' && senha == '123'){
        return true
    } else{
        return false
    }
}

let usuario = 'pedro'
let senha = '123'
let validacao = validar(usuario, senha)

if(validacao){
    console.log('Acesso Concedido')
} else{
    console.log('Acesso Negado')
}



function somar(x, y){
    return x + y
}

const sobrenome = (sob) => {
    let nomeCompleto = 'Bonieky ' + sob

    return nomeCompleto
}

console.log(sobrenome('Pereira'))





function addSquares(a, b){
    const square = (x) => {
        return x * x;
    }

    return square(a) + square(b);
}

console.log(addSquares(10,10))



let ingredientes = 
[
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
// Adicionar no Array usar PUSH
//ingredientes.push('cebola')

//Remover último item do Array POP
//ingredientes.pop()

//Remover primeiro item do Array Shift
//ingredientes.shift()

console.log(`Total de Ingredientes: ${ingredientes.length}`);



let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log('1. ' + carros[x])

carros[1] = 'Audi'

console.log(carros)

carros.push('Volvo')
console.log(carros)
console.log(carros.length)


// Objetos

let nome = 'Bonieky';
let nomes = ['bonieky', 'pedro']

// Criar objeto
let personagem = {
    nome: 'Carlos',
    idade: 21,
    olhos: ['preto', 'azul'],
    caracteristicas: {

        classe: 'Assassino',
        poder: 'Chamas'
    },
    pais: 'Brasil'
}

personagem.nome = 'Erick'
personagem.idade = 18
personagem.caracteristicas.classe = 'Arqueiro Assassino [Lendário]'
personagem.caracteristicas.poder = 'Chamas Negra'

personagem.idade += 5
personagem.olhos.push('verde')

console.log(`Seu nome é ${personagem.nome} e você têm ${personagem.idade} anos, sua classe é ${personagem.caracteristicas.classe} usuário de ${personagem.caracteristicas.poder}`)
console.log(personagem.olhos[2])


let pessoa = {
    nome: 'Erick',
    idade: 18,
    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(pessoa.carros[1].modelo)

*/

/*

let pessoa = {
    nome: 'Neymar',
    sobrenome: 'Junior',
    idade: 18,
    /*nomeCompleto: function(){
        return this.nome + ' ' + this.sobrenome
    }


    nomeCompleto: () => {
        return pessoa.nome + ' ' + pessoa.sobrenome
    }

}

console.log(pessoa.nomeCompleto())



let frutas = [
    {cor: 'verde', qt: 5},
    {cor: 'azul', qt: 1},
    {cor:  'vermelho', qt: 10},
]

//for(let contador = 0; contador < frutas.length; contador++){
//    console.log(frutas[contador])
//}

//for(let i in frutas){
  //  console.log(frutas[i])
//}

for(let fruta of frutas){
    console.log(`Cor da Fruta: ${fruta.cor} - Quantidade: ${fruta.qt}`)
}



// While

let contador = 0

while(contador < 10){
    contador++
    console.log(contador)
}

let fruits = ['Maça', 'Uva', 'Banana']

//for(let contador = 0; contador < fruits.length; contador++){

 //   console.log(fruits[contador])
//}

//for(let contador in fruits){
  //  console.log(fruits[contador])
//}

//for(let frutas of fruits){
  //  console.log(frutas)
//}

let contador = 1

//while(contador < fruits.length){
  //  console.log(fruits[contador])
    //contador++
//}

while(contador <=  100){
    console.log(contador)
    contador++
}

let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

//fruits.join(' '); //juntar

fruits[fruits.length - 1] = 'PERA'

fruits.pop()
fruits.push('Pera')

console.log(fruits)



let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

fruits.sort() // Ordem alfabética
fruits.reverse() //sort + reverse = Ordem Z - A // Somente o REVERSE = Inverte o Array
console.log(fruits)

*/

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year:2018},
    {brand: 'Ferrari', year: 2020},
    {brand: 'Fusca', year:2012},

]

cars.sort((a, b) => {
    if(a.year > b.year){
        return 1;
    } else if(a.year < b.year){
        return -1;
    } else{
        return 0;
    }

    //return a.year - b.year;
    //return b.year - a.year

})
console.log(cars)
