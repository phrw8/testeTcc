// //var let e const
// var x=10
// var y=6
// if(y>5){
//     var x = 5
// }

// console.log(x)

// let p=5
// let q=10

// if(q>9){
//     let p=4
//     console.log(p)
// }
// console.log(p)

// const r=5
// const t=10

// if(t>9){
//     const r=4
//     console.log(r)
// }
// console.log(r)

// arrow function
// const sum = function(a,b){
//    return a+b
// }

// const arrowSum=(a,b)=>a+b;

// console.log(sum(1,2))
// console.log(arrowSum(1,2))

// const greeting = (nome)=>{
//     if(nome){
//         return `Hello ${nome}`
//     }else{
//         return `Hello`
//     }
// }

// console.log(greeting("Paulo") )

// const user={
//     name:"Theo",
//     sayUserName(){
//         setTimeout(function(){
//             console.log(this)
//             console.log(`Username:${this.name}`)
//         }, 1000)

//     },
//     sayUserNameArrow(){
//         setTimeout(()=>{
//             console.log(this)
//             console.log(`username:${this.name}`)
//         }, 1000)
//     }
// }

//  user.sayUserName()
//  user.sayUserNameArrow()

//  filter
// const arr=[1,2,3,4,5,6]

// const highNumbers= arr.filter((n)=>{
//     if(n>=3){
//         return n
//     }
// }
// )

// console.log(highNumbers)

// const users = [
//     {name:"Paulo",available:true},
//     {name:"Joao",available:false},
//     {name:"Matheus",available:true},
//     {name:"Rafael",available:true},
//     {name:"Yuri",available:false},
//     {name:"Helmo",available:true},
// ]
// const availableUsers=users.filter((users)=>{
//     return users.available
// })

// console.log(availableUsers)

// // map (utilaizado para modificar o array)
// const products=[
//     {name:"Camisa",price:20.99, category:"Roupas"},
//     {name:"Fogao",price:459.00, category:"Eletro"},
//     {name:"Chaleira Eletrica",price:199.99, category:"Eletro"},
//     {name:"Calca Cargo",price:79.99, category:"Roupas"}
// ]

// products.map((product) =>{
//     if(product.category==="Roupas"){
//         product.onSale=true
//     }
// })
// console.log(products)

// templete strings

// const userName="Paulo"
// const userAge=19

// console.log(`Ola meu nome é ${userName} e tenho ${userAge} anos`)

// destructuring

// const product={
//     nome:"Mouse",
//     price:"40",
//     color:"cinza",
//     category:"Perifericos"
// }

// const {nome:productName, color:colorProduct, price, category}=product

// console.log(`O nome do produto é ${productName}, e ele custa ${price}`)

// spred operator

const a1=[1,2,3]
const a2=[4,5,6]

const a3=[...a1,...a2]

console.log(a3)

const a4=[0,...a3,7]

console.log(a4)

































