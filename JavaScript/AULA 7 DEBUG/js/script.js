// strict
"use strict";

// opa="teste"

const opa="teste"

// delete[].length

// debugger
let a =2
let b =3

console.log(opa)

// debugger

for(let i =0; i<a; i++){
    b=b+2

}
console.log(b)
// tratamento de dado

function checkNumber(n){

    const result = Number(n);

    if (Number.isNaN(result)){
        console.log("Valor incorreto")
        return
    }

    console.log("valor correto")
    return result
}

checkNumber(7)
checkNumber("01")
checkNumber("")
checkNumber("TESTE")

// exceptions

// let x=10

// if(x!=11){
//     throw new  Error("valor errado")
// }

// try catch
try{
    const tatu=k+v ;
} catch(error){
console.log(`Erro no programa :${error}`)
}




















