// criando uma funcao
function minhaFuncao(){
    console.log("Testando")

}
minhaFuncao()

const minhaFuncaoVariavel= function(){
    console.log("Funcao em variavel")
}

minhaFuncaoVariavel()

function funcaoParametro(txt){
    console.log(`Imprimindo ${txt}`)

}
funcaoParametro("alguma coisa")
funcaoParametro("outra coisa")

// return

const a=10
const b=20
const c=30
const d=40

function soma(n1, n2){
    return n1+n2;
}

const resultado = soma(a,b)
console.log(resultado)

// escopo da funcao

let y=10

function escopoFuncao(){
    let y = 20;
    console.log(`valor de y dentro da funcao é ${y}`)
}
console.log(`valor de y fora da funcao é ${y}`)

escopoFuncao()

// arrow function

const testeArrow = () => {
    console.log(`Esta é uma arrowfunction`)
}

testeArrow()

const parOuImpar = (n) =>{
    if(n% 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
}
parOuImpar(7)
parOuImpar(4)

// mais sobre arrow function

const raizQuadrada = (x) => {
    return x*x
}

const resultado1= raizQuadrada(6)
console.log(resultado1)

console.log(raizQuadrada(4))

raizQuadrada(6)

const raizQuadrada2 = (x) => x*x

console.log(raizQuadrada2(9))

// parametro opcional

const multiplicador = function(m , n){
    if(n === undefined){
        return m * 2
    } else{
        return m * n
    }
}
console.log(multiplicador(4))
console.log(multiplicador(2,9))

const greeting = (name) => {
    if(!(name)){
        console.log("ola")
        return
    } else{
        console.log(`ola ${name}`)
    }
}

greeting("Paulo")
greeting()

// valor default

const greetingName = function (name, greeting ="bom dia") {
        console.log(`${greeting} ${name}`)
        return
}

greetingName("Paulo")
greetingName("Paulo", "Ola")

const textRepeat = function( text, repeat=2 ){
    for(let p=0; p < repeat; p++ ){
        console.log(`${text}`)
    }
}
textRepeat("Repete so duas vezes")
textRepeat("Agora repete 5 vezes", 5)

// recursion
const untilTen =(n,m)=> {
    if(n<10){
        console.log('A funcao parou e executar!')
    } else{
        const x = n-m
        console.log(x)
        untilTen(x,m)
    }
}
untilTen(100,5)

// infite recursion
// function run (){
//     console.log("Executando...")
//     run()
// }
// run()


//  funcao fatorial
function factorial(x){
    if(x===0){
        return 1
    } else{
        return x* factorial(x-1)
    }
}
const num=6

const result=factorial(num)

console.log(`O vaor fatorial de ${num} é ${result}`)