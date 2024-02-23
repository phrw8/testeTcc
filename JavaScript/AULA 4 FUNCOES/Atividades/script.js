// // boas vindas
// const greeting = function(name, greetingDefault="Boas vindas"){
//     console.log(greetingDefault,name)
// }

// greeting("Paulo", "Bom dia")

// const funcaoImparPar= function(n){
//     if(n % 2 === 0){
//         return console.log(true)
//     } else{
//         return console.log(false)
//     }
// }
// funcaoImparPar(3)
// funcaoImparPar(8)


// const uppercaseString= function(texto){
//     return texto.toUpperCase()
// }
// const text1= "Ola mundo"
// const text2="Eu gosto de pizza"

// const resultado= uppercaseString(text1)
// console.log(resultado)

// // numero primos

// // const funcaoNumeroPrimo= function(number){
    
// //     for(let numberCheck= 2; numberCheck <= number; numberCheck++){

// //         let primo=true;
        
// //         for(let divisor=2; divisor < numberCheck; divisor++){

// //             if (numberCheck % divisor === 0){

// //             primo= false;
// //             break
// //             } 
            
// //         }
// //         if (primo) console.log(numberCheck);
// //     }
     
// // }
// // funcaoNumeroPrimo(5)

// // const functionPrimo = function(number){
// //     for(let divisor=2; divisor < number; divisor ++){
// //         if(number % divisor === 0){
// //             number=false
// //         } else{
// //             number=true
// //         }
        
// //         console.log(number)
// //     }

// // }
// // functionPrimo(4)

// // Calculadora aritimetica

// const calcMedia =function(arr){
//     let soma=0
//     for(let i=0; i < arr.length; i++){
//         soma=soma+arr[i]
        
//     }
//     let resultado =soma/arr.length
//     return resultado
// }
// console.log(calcMedia([1,2,3,8]))

// const calMedia2 = function(...arg){
//     let total=0
//     for(let i=0; i < arg.length;i ++ ){
//         total += arg[i]
//     }
//     return total
// }
// console.log(calMedia2(1,3,4,6576,65,65,))

// const funcaoPrimo= function( number){
//     for(let divisor= 2; divisor < number; divisor++){
//         if(number % divisor === 0){
//             return number=false
//         }
//     }
//     return number=true
// }
// console.log(funcaoPrimo(7))


// const funcaoIntPrimo = function(number){
//     for(let smallnumber=1; smallnumber < number; smallnumber ++ ){
//         let primo=true
//         for(let divisor=2; divisor < smallnumber; divisor++){
//             if(smallnumber % divisor === 0){
//                 primo=false
//                 break
//             }
//         } 
//         if (primo) {
//                 console.log(smallnumber)
//             }
//     }
// }
// console.log(funcaoIntPrimo(25))


// // inverter um array

// const inverterArray = function(arr){
//     soma=[0]
//     for(let i= arr.length-1; i >= 0; i--){
//         soma= soma + arr[i]
//     }
//     return soma

// }
// console.log(inverterArray([1,2,3,]))

// const inverterArray2 = function(arr){
//     return arr.reverse();
// }
// console.log(inverterArray([1,2,3]));


// const funcPorcentagem =function(numero, porcentagem){
//      return numero * (porcentagem / 100)

// }
// console.log(funcPorcentagem(120, 4))

// const funcFatorial=function(numero){
//     let soma=1
//     for(let multiplicador= 1; multiplicador<=numero;multiplicador++){
//         soma = soma * multiplicador
//     }
//     return console.log (soma)
// }

// funcFatorial(7)

// // criar senha

// const funcaoSenha=function(senha){

//     let caracterMaiusculo=false
//     let caracterMinusculo=false
//     let caracterNumber=false
//     let caracterSpecial=false

//     for(let i=0; i<senha.length; i ++){
//         if(senha[i] === senha[i].toUpperCase()){

//             caracterMaiusculo=true

//         } if(senha[i] === senha[i].toLowerCase()){

//             caracterMinusculo=true

//         } if(!isNaN(senha[i])){

//             caracterNumber=true
            
//         }
//         if("!@#$%&*".includes(senha[i])){

//             caracterSpecial=true
            
//         }
//     }
//     if(caracterMaiusculo && senha.length >= 8 && caracterMinusculo && caracterNumber && caracterSpecial){
//          console.log("Senha criada")
//     } else{
//         let mensagem = "A senha deve conter:";
//         if (!caracterMaiusculo) mensagem += " pelo menos um caractere maiúsculo;";
//         if (!caracterMinusculo) mensagem += " pelo menos um caractere minúsculo;";
//         if (!caracterNumber) mensagem += " pelo menos um número;";
//         if (!caracterSpecial) mensagem += " pelo menos um desses caracteres especiais (!@#$%&*)";
//         if (senha.length < 8) mensagem += " pelo menos 8 caracteres.";

//         console.log(mensagem);
//     }

// }
// funcaoSenha("Paul#2023")

// // dar um numero para a funcao e receber todos os numeros primos antes dele 

// const functNumPrimo = function(BigNumber){
   
//     for(let i=2; i <= BigNumber; i++){
//         let primo= true 
//         for(let divisor=2; divisor < i; divisor++){

//             if(i % divisor === 0){
//                 primo=false
//             } 

//         } 
//         if (primo){
//             console.log(i)
//         }   
//     }
// }
// functNumPrimo(17)



let fireCelc=function( fire){
        let celc = 5/9 * (fire-32)

        console.log(celc)

}
fireCelc(32)

let celcFire=function( celc){
    let fire = celc * 1.8 +32

    console.log(fire)

}
celcFire(0)

let pessoa = {
    nome:"",
    peso:"",
    altura:"",
    
    setNomePesoAltura : function(nome,peso,altura){
        this.nome=nome
        this.peso=peso
        this.altura=altura

        let IMC = function(){
            let valor= peso/((altura/100)*(altura/100))
            return valor
        }

        console.log(`${nome}, seu IMC é ${IMC()}`)

    }
    
}
pessoa.setNomePesoAltura("Paulo", 81, 180)

console.log(pessoa)





