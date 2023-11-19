console.log("Testee5")
//é assim q faz o print
//o defer faz com q o script seja executado somente após o carregamento completo
//do HTML, assim o script não bloqueia o carregamento da pagina

console.error('Este é um erro!')
console.warn('Este é um aviso.')
console.log('é assim que printa mensagem')

// variáveis
var x = 10
//maneiras mais modernas
let y = 15
const z = 20 //constante, imutável
if (1){
    let y = 55
    console.log(y)
}
console.log(z)

//tipos de dados
const name = "Aquila"
console.log(name)
console.log(typeof name)

const number = 4
console.log(number)
console.log(typeof number)

const decimal = 2.3
console.log(decimal)
console.log(typeof decimal)

const bool = false
console.log(bool)
console.log(typeof bool)

const v = null
console.log(v)
console.log(typeof v)

const lista = ["um", 'dois', 'tres']
console.log(lista)
console.log(typeof lista)

const user = {email: '123@gmail.com', senha: 'aa', teste: 'galinha'}
console.log(user)
console.log(typeof user)

//métodos de string
const nometodo = "Aquila Morais"
console.log(nometodo.lenght)

const stringtoarray = nometodo.split(' ')
console.log(stringtoarray)
console.log(nometodo.toUpperCase())//deixa tudo maiusculo
console.log(nometodo.toLowerCase())
console.log(nometodo.indexOf('Morais'))//qual indice começa essa string
console.log(nometodo.slice(0,7))//separa os caracteres de acordo com os indices

//métodos de array
const list = ['a','b','c','d']
console.log(list.length)//pega o tamanho da lista
console.log(list[2])//pega o elemento neste indice 2
list[5]= 'f' //adiciona este elemento na lista.
console.log(list)
console.log(list[list.length -1])//pega o indice na lista q é igual ao tamanho da lista
//porém, não existe tal número já que começa com zero o indice, por isso diminuisse 1
list.push('g')//adiciona o elemetno no final
list.pop()//remove o ultimo elemento
list.shift()//remove o primeiro elemento
list.unshift('h')//adiciona elemento lá no inicio

//objetos
const produto = {
    nomee: "Camisa",
    preco: 15.99,
    estoque: false,
    sizes: ["P", "M", 'G'],
    'Cor': 'Azul',
}
console.log(produto.nomee)
console.log(produto['nomee'])//tbm imprime 'Camisa'
console.log(produto['Cor'])//assim acessa a key em formato de string

//destructuring
const{preco, estoque} = produto

console.log(preco)
console.log(estoque)

const[n1, n2] = list //pega os primeiros indices da lista(array)

//JSON - JavaScript Object Notation
const dog = {
    nameee: 'Rover',
    age: 10,
}
const json = JSON.stringify(dog)//transforma em texto
console.log(json)
const obj = JSON.parse(json)
console.log(obj)
const jsonerrado = '{"name":"Teste", "user":"aag}'
const obj2 = JSON.parse(jsonerrado)
console.log(obj2)

// Estruturas condicionais
const a = 10
if(a > 0){
    console.log("a é maior que 0")
}
const b = "Aquila"//com 3 iguais(===), ele verificar tbm o tipo do dado
//com 2 iguais(==) ele verifica o dado exatamente.
if(b === " joao"){
    console.log('O nome é joao')
} else if(b === "seila"){
    console.log('teste')
}

const numbere = 14

//if ternário
let teste = numbere < 20 ? 'Yes' : 'No'
console.log(teste)

//Estruturas de repetição
const listt = [1,2,3,4,5]
let count = 0

while(count < listt.length){
    console.log('imprimindo: ' +listt[count])
    count++
}

const outra = ['a','b','c','d']
for(let i = 0; i < outra.lenght; i++){
    console.log(`imprimindo: ${outra[i]}`)//obs: usa a crase `` quando
    //for fazer formatação dentro da string.
}
console.log(`variavel: ${numbere}`)

//métodos de array -> repetição
const names = ["Aquila", "Sarah", "Iridan", "Gilmar"]
names.forEach(function(name){
    console.log(`o nome é : ${name}`)
})

const namesmod = names.map(function(name){

    if(name === 'Aquila'){
        return (name = "Sr Aquila")
    } else {
        return name
    }
})

console.log(namesmod)

const big = [1,2,3,4,10,100].filter(function(number){//filtra com base numa função
    return number >= 5
})

const sumAll = [10,20,30,40].reduce(function(total,number){//reduz a uma resposta com base numa função tbm
    return total + number
})


//Funções
function funcao1(){
    console.log("Oi")
}
funcao1() //chamando

function nome(nome, sobre){
    return `o nome completo é: ${nome} ${sobre}`
}
nome("Aquila", "Morais")//não vai printar nada, pq a função só retorna
console.log(nome("Aquila", "Morais"))//assim printa

// arrow functions
const function3 = (a,b) => {//parece varíavel, só que faz função
    return a+b
}
const function3simples = (a,b) => a + b

// Classes
class Produto{
    constructor(nome, preco){
        this.preco = preco
        this.nome = nome
    }
    detalhes(){
        return `O nome do produto é: ${nome} e custa ${preco} reais`
    }
}
const treino = new Produto("Roupa branca", 10.00)
console.log(treino.nome, treino.preco)
console.log(treino.detalhes())

//herança
class SuperProduto extends Produto{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }
    adjetivo(adjetivo){
        return `O ${this.name} é muito ${adjetivo}`
    }

    //static
    hello(){
        console.log("hello")
    }
}

const tenis = new SuperProduto("Tenis vermelho", 13.00, "43")
console.log(tenis.name)

console.log(tenis.adjetivo("bom"))
SuperProduto.hello()//com métodos estaticos é possivel chamá-los
//sem precisar criar um objeto pra isso.

//DOM - Document Object Model
const title = document.getElementById("title")//seleciona por id no documetno da pagina
console.log(title)

//query select
//Seleção de Elementos
const sametitle = document.querySelector("#title")//trabalha com o CSS, mesma coisa q acima
console.log(sametitle)

const texts = document.querySelectorAll('.text')//seleciona todos com essa msm classe
console.log(textes)
console.log(texts[1])

texts.forEach(text => {
    console.log(text.textContent.toLocaleUpperCase())//ele vai
    //deixa em caixa alta todos os textos da variavel texts.
})

//Manipulação de elementos
title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<span>Alteramos o html deste elemento</span>'
texts[1].classList.add('my-class')
texts[1].classList.remove('my-class')
texts[2].remove()

//Eventos
const btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    console.log("CLicou")
    texts[2].style.color = 'blue'
});