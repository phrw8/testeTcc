const temperatura=document.querySelector("#temperatura")
const nivel=document.querySelector("#nivel")
const pressao=document.querySelector("#pressao")
const btnSubmit=document.querySelector("#btn-submit")


const endPoint="api para randomizar temperatura nivel e pressao"

const obterDados=()=>{
    fetch(endPoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    temperatura.innerHTML=`Temperatura: ${dados.temperatura}`
    nivel.innerHTML=`Nivel: ${dados.nivel}`
    pressao.innerHTML=`Temperatura: ${dados.pressao}`
})
}

let interalo=setInterval(() => {
    obterDados()
}, 10000);


let dados={
    nome:"Paulo",
    canal:"CBFCursos",
    curso:"JavaScript",
}

let cabecalho={
    method:"POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endPoint="api onde vai ser mandado os dados"
    fetch(endPoint)
    .this(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}








