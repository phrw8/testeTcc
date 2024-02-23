// // setTimeout
// console.log("ainda nao executou")

// setTimeout(function(){
//     console.log("Estou aqui")
// }, 2000)
// console.log("ainda nao executou")

// // set interval (nao para de ser executada)

// console.log("ainda nao executou")
// // setInterval(function(){
// //     console.log("ola")
// // },3000)

// console.log("ainda nao executou")

// // promises

const promessa= Promise.resolve(5+5)

console.log("Algum codigo")

promessa.then(value =>{ 
    console.log(`A soma é ${value}`)
    return value
})
.then((value)=> value - 1)
.then((value) => console.log(`Agora é ${value}`))
console.log("Outro codigo")

//  falha na prmomise 
Promise.resolve(4*"avc")
.then((n) =>{
    if(Number.isNaN(n)){
        throw new Error("valores invalidos")
    }
}) .catch((err) => console.log(`um erro ocorreu ${err}`))

// reject promise

function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n>10){
            resolve(`O numero é maior que 10`)
        } else{
            reject(new Error(`numero muito baixo`))
        }
    }
    )
}
const a =checkNumber(20)
const b=checkNumber(5)

console.log(a,b)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
console.log(`um erro ocorreu ${err}`)
)