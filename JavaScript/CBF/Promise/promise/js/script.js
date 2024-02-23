const numero=document.querySelector("#numero")


let promise=new Promise((resolve,reject)=>{
    let resultado=false
    let tempo=2000
    setTimeout(()=>{
        if(resultado){
            resolve("Deu tudo certo")
        } else{
            reject("Deu tudo errado")
        }
    },tempo)
})
promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("ok")
    numero.classList.remove("error")
})
promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("error")
    numero.classList.remove("ok")

})

numero.innerHTML="Carregando..."