// class Carros {
//     constructor(nome,portas){
//         this.nome=nome
//         this.portas=portas
//         this.ligado=false
//         this.vel = 0
//     }
//     ligarCarro=function(){
//         this.ligado=true

//     }
//     desligarCarro=function(){
//        this.ligado=false
//     }
// }

// const c1= new Carros("c1",4)
// console.log(c1)

// class Militar extends Carros{
//     constructor(nome,portas,blindagem){
//         super(nome,portas)
//         this.blindagem=blindagem
//     }
// }
// const c2=new Militar("militar", 6, 3 )

// c2.ligarCarro()
// console.log(c2)

class Carros{
    constructor(nome,portas,cor){
        this.nome=nome
        this.portas=portas
        this.cor=cor
    }
}

class Militar extends Carros{
    constructor(nome,portas,cor,blindagem,municao){
        super(nome,portas,cor)
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function(){
        this.municao--
    }
}

const inputNome=document.querySelector("#f-nome")
const inputPortas=document.querySelector("#f-portas")
const inputBlindagem=document.querySelector("#f-blindagem")
const inputMunicao=document.querySelector("#f-municao")
const inputCor=document.querySelector("#f-cor")

const btnAdd=document.querySelector("#btn-addCarro")

const tipoMilitar=document.querySelector("#f-tipoMilitar")
const tipoNormal=document.querySelector("#f-tipoNormal")

const carrosDiv=document.querySelector(".carros")



function adicionarCarro() {
    let newCarro;
  
    if (tipoNormal.checked) {
      newCarro = new Carros(inputNome.value, inputPortas.value,inputCor.value);

      const div = document.createElement("div");
      div.classList.add("carro")
      div.innerHTML = `<p>Nome: ${newCarro.nome}</p><p>Portas: ${newCarro.portas}</p><p>Cor: ${newCarro.cor}</p>`;

      const btnLimpar=document.createElement("button")
      btnLimpar.innerHTML="Remover"
      btnLimpar.classList.add("btn-limpar")
      div.appendChild(btnLimpar)

      btnLimpar.addEventListener("click", (e) => {
        div.remove()
      });

      carrosDiv.appendChild(div);

    } else if (tipoMilitar.checked) {
      newCarro = new Militar(inputNome.value, inputPortas.value, inputCor.value, inputBlindagem.value, inputMunicao.value);
      
      const div = document.createElement("div");
      div.classList.add("carro")
      div.innerHTML = `<p>Nome: ${newCarro.nome}</p><p>Portas: ${newCarro.portas}</p><p>Cor: ${newCarro.cor}</p>
      <p>Blindagem: ${newCarro.blindagem}</p><p>Muniçao: ${newCarro.municao}`;
      const btnLimpar=document.createElement("button")
      btnLimpar.innerHTML="Remover"
      btnLimpar.classList.add("btn-limpar")
      div.appendChild(btnLimpar)
      btnLimpar.addEventListener("click", (e) => {
        div.remove()
      });
      carrosDiv.appendChild(div);
   
    }
}

removerDisable=function(){
  inputMunicao.removeAttribute("disabled")
  inputBlindagem.removeAttribute("disabled")
}

adicionarDisable=function(){
  inputMunicao.setAttribute("disabled", "")
  inputBlindagem.setAttribute("disabled","")

}

tipoMilitar.addEventListener("click",removerDisable)
tipoNormal.addEventListener("click",adicionarDisable)
btnAdd.addEventListener("click", adicionarCarro)
















// (e)=>{
    
//     if(tipoNormal.value===true){
//         let newCarro= new Carros(inputNome.value, inputPortas.value)
//     } else if(tipoMilitar.value===true){
//         let newCarro= new Militar(inputNome.value, inputPortas.value, inputBlindagem.value,inputMunicao.value)
//     }
    
//     const div=document.createElement("div")
//     div.innerHTML=`<p>Nome: ${newCarro.getNome()}}</p>`
//     carrosDiv.appendChild(div)

    
// })