// variaveis
let nome="Pauladas"

console.log(nome)

nome="Pauladas Nelas"

console.log(nome)

const idade=31

console.log(idade)

// mais sobre variaveis

// let 2teste ="Invalido"
// let @teste="Invalido"

let a=10,
b=20,
c=30;

console.log(a,b,c)

const nomeCompleto='Matheus da Silva'
const nomecompleto='Arthur Tavares'

console.log(nomeCompleto)
console.log(nomecompleto)

// Prompt
// const age=prompt("Digite sua idade")
// console.log(`voce tem ${age} anos`)

// // alert
// alert("Testando")

// const z=10

// alert(`o numero é ${z}`)

// math
console.log(Math.max(1,2,3,7))
console.log(Math.floor(3.14))
console.log(Math.ceil(9.01))

// console
console.log("teste")
console.error("erro")
console.warn("aviso")

// if
const m=10

if(m > 5){
    console.log("m é maior que 5")
}

const user="joao"

if(user==="joao"){
    console.log("Olá joao")
}
if(user==="maria"){
    console.log("Olá maria")
}
console.log(user==="joao", user==="maria")

// else

const loggedIn= false

if(loggedIn){
    console.log("Esta autenticado")
}
else{
    console.log("Nao esta autenticado")
}

const q=10
const w=15

if(q>5 && w>20){
    console.log("Numero mais alto")
}
else{
    console.log("Os numeros nao sao mais altos")
}

// else if
if(!(1>2)){
    console.log("teste1")
} else if(2>3){
    console.log("teste2")
}  else if(5>1){
    console.log("Aqui ó pai")
}

const userName="Matheus"
const userAge= 31

if(userName==="jose"){
    console.log("Ola jose")
} else if(userName==="Matheus" && userAge===31){

    console.log("Ola matheus vc tem 31 anos")
} else{
    console.log("Nenhuma condiçao aceita")
}

// while
let p=0

while(p<5){
    console.log(`Repetindo ${p}`)
   p=p+1
}
// do while
let o=20

do {
    console.log(`valor de o: ${o}`)
    o--
} while(o>-1);

// for
for(let t=0; t<10; t++){
    console.log(`Repetindo ${t}`)
}

// braek

for(let g = 20; g > 10 ; g--){
    console.log(`O valor de g é ${g}`)

    if(g === 15){
        console.log("Ja ta bom pode parar")
        break
    }
}

// continue

for(let s= 1 ; s <10; s =s+1 ){
    if(s % 2 === 0){
        console.log("Numero par")
        continue
    }
    console.log(s)
}

// switch "o break é necessario para a funaciolidade"

const job="advogado"

switch(job){
    case "programador":
        console.log("Voce é um advogado")
        break
        case "programador":
            console.log("Voce é um programador")
            break
        case "advogado":
            console.log("Voce é um advogado")
            break
        case "medico":
            console.log("Voce é um medico")
        break
        default:
            console.log("Profissao nao encontrada")
}
