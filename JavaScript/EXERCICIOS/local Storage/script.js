const inpNome=document.querySelector("#inp-nome")
const inpSubmit=document.querySelector("#inp-submit")
const nome=document.querySelector("#nome")
const back=document.querySelector("#back")
const c1=document.querySelector(".container-1")
const c2=document.querySelector(".container-2")

// function

function containerToggle(){
    c1.classList.toggle("hide")
    c2.classList.toggle("hide")

}
function addNome(){
    const nomeValue=inpNome.value
    const nomeLS=JSON.parse(localStorage.getItem("nome"))
    nome.innerHTML=`${nomeLS}`
    containerToggle()
    localStorage.setItem("nome", JSON.stringify(nomeValue));
}


// events

inpSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    addNome();
});

back.addEventListener("click", function () {
    containerToggle();
});

window.addEventListener("load", () => {
    const nomeArmazenado = localStorage.getItem("nome");
    if (nomeArmazenado) {
        nome.innerHTML = JSON.parse(nomeArmazenado);
        containerToggle();
    }
});