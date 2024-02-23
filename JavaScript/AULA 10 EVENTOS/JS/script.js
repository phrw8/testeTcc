let btn = document.getElementById("my-button");

btn.addEventListener("click", () => {
  console.log("Clicou em mim!");
});
// removendo evento

const secondBtn= document.querySelector("#btn")

function imprimirMensagem(){
    console.log("teste")
}

secondBtn.addEventListener("click",imprimirMensagem)

const thirdBtn=document.querySelector("#other-btn")

thirdBtn.addEventListener("click", ()=>{
    console.log("Evento removido")
    secondBtn.removeEventListener("click",imprimirMensagem)
})

// objeto do evento

const myTitle=document.querySelector("#my-title")

myTitle.addEventListener("click",(e)=>{
    console.log(e)
    console.log(e.offsetX)
    console.log(e.pointerType)
    console.log(e.target)
})

// propagando evento

const containerBtn=document.querySelector("#btn-container")
const btnInsideContainer=document.querySelector("#div-btn")

containerBtn.addEventListener("click",()=>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Evento 2")
})

// removendo evento padrao
const a=document.querySelector("a")

a.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("nao alterou pagina")
})

// eventos de teclas

// document.addEventListener("keyup", (e)=>{
//     console.log(`soltou a tecla ${e.key}`)
// })

// document.addEventListener("keydown", (e)=>{
//     console.log(`Pressionou a tecla  ${e.key}`)
// })

// eventos de mouse 
const mouseEvents =document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown",()=>{
    console.log("Pressionou o botao")
})

mouseEvents.addEventListener("mouseup", ()=>{
    console.log("soltou o botao")
})
// nao ta pegando o duplo click
mouseEvents.addEventListener("dblclick",()=>{
    console.log("clique duplo")
})

//movimento do mouse

// document.addEventListener("mousemove", (e)=>{
//     console.log(`no eixo X: ${e.x}`)
//     console.log(`no eixo Y: ${e.y}`)
// })

// evento por scroll
// window.addEventListener("scroll", (e)=>{
//     if (window.pageYOffset>200)
//     console.log("Ativou")
// })

// focus e blur

const input=document.querySelector("#my-input")

input.addEventListener(`focus`,(e)=>{
    console.log("entrou no input")
})
input.addEventListener(`blur`,(e)=>{
    console.log("saiu no input")
})

// evento de load e beforeload

//  

// debounce
const debounce = (f, delay)=>{
    let timeout

    return(...arguments)=>{
        if(timeout){
            clearTimeout(timeout)
        }

        timeout= setTimeout(()=>{
            f.apply(arguments)
        },delay)
    }
}
window.addEventListener("mousemove",debounce(()=>{
    console.log("executando a cada 400ms")
},400)
)











