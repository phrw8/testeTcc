// class Pessoa {
    
//     constructor(nome,idade){
//         this.nome= nome
//         this.idade=idade
//     }
//     getNome(){
//         return this.nome
//     }
//     getIdade(){
//         return this.idade
//     }
//     setNome(nome){
//         this.nome=nome
//     }
//     setIdade(idade){
//         this.idade=idade

//     }    
//     info(){
//         console.log(`Nome: ${this.nome}`)
//         console.log(`Idade: ${this.idade}`)
//     }
    
// }

// let pessoa=[]

// const btn=document.querySelector("#btn-add")
// const res=document.querySelector(".res")


// btn.addEventListener("click", (e)=>{
    
    // const nome=document.querySelector("#f-nome").value
    // const idade=document.querySelector("#f-idade").value
    // let p = new Pessoa(nome,idade)
    // pessoa.push(p)
    // console.log(pessoa)
    //  // Limpa o valor do campo de input com o ID "f-nome"
    //  document.querySelector("#f-nome").value = "";

    //  // Limpa o valor do campo de input com o ID "f-idade"
    //  document.querySelector("#f-idade").value = "";
    //  document.querySelector("#f-nome").focus()

    //  const div=document.createElement("div")
     
    //  div.innerHTML=`<p>Nome: ${nome}</p> <p>Idade: ${idade}</p>`
    //  div.setAttribute("class","pessoa")
    //  res.appendChild(div)
// })




// class Carros{
//     constructor(marca,modelo){
//         this.marca= marca
//         this.modelo=modelo
//     }
//     getMarca(){
//         return this.marca
//     }
//     getModelo(){
//         return this.modelo
//     }
//     info(){
//         return [this.marca,this.modelo]
//     }
// }

// const carro1=new Carros("Fiat","Uno")

// console.log(carro1.getMarca())
// console.log(carro1.info())

const Pessoa={
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome=nome
    },
    setIdade:function(idade){
        this.idade=idade
    },
    info:function(){
       return this.nome + " " + this.idade;
    }
}
const btn=document.querySelector("#btn-add")
const res=document.querySelector(".res")


btn.addEventListener("click", (e)=>{
    const nomeValue=document.querySelector("#f-nome").value
    const idadeValue=document.querySelector("#f-idade").value
    Pessoa.setNome(nomeValue)
    Pessoa.setIdade(idadeValue)


     // Limpa o valor do campo de input com o ID "f-nome"
     document.querySelector("#f-nome").value = "";

     // Limpa o valor do campo de input com o ID "f-idade"
     document.querySelector("#f-idade").value = "";
     document.querySelector("#f-nome").focus()

     const div=document.createElement("div")
     
     div.innerHTML=`<p>Nome: ${Pessoa.nome}</p> <p>Idade: ${Pessoa.idade}</p>`
     div.setAttribute("class","pessoa")
     res.appendChild(div)
})























