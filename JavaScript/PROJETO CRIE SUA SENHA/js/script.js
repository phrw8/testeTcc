const newPasswordContainer=document.querySelector(".new-password-container")
const senha=document.querySelector("#senha")
const activePass=document.querySelector("#active-new-password")
const optionsPassContainer=document.querySelector(".form-password-container")
const setCaractersLength=document.querySelector("#caracters-length")
const setLetters=document.querySelector("#set-letters")
const setNumbers=document.querySelector("#set-numbers")
const setSymbols=document.querySelector("#set-symbols")
const btnCriarSenha=document.querySelector("#btn-criar-senha")

const caracteresNumber=parseInt(setCaractersLength)
function gerarStringAleatoria(length){
    let resultado=""
    let caracteres=""

    if(setNumbers.checked){
        const numbers= `1234567890`
        caracteres+=numbers
    }
    if(setLetters.checked){
        const letters=`abcdefghijklmnopqrstuvwxyz`
        caracteres+=letters
    }
    if(setSymbols.checked){
        const symbols=`!@#$%¨&*(),.;=+"'~][><`
        caracteres+=symbols
    }

    for(let i = 0; i<length; i++){
        const indiceAleatorio=Math.floor(Math.random()*caracteres.length)
        resultado+=caracteres.charAt(indiceAleatorio)
    }
    return resultado
    
}
btnCriarSenha.addEventListener("click",(e)=>{
    e.preventDefault()
    const caracteresNumber = parseInt(setCaractersLength.value);
    if (isNaN(caracteresNumber) || caracteresNumber <= 0) {
        alert("Informe um número válido de caracteres.");
        return;
    }
    const resultado =gerarStringAleatoria(caracteresNumber)
    if (!setNumbers.checked && !setLetters.checked && !setSymbols.checked) {
        alert("Selecione pelo menos uma opção de caracteres.");
        return;
    }
    newPasswordContainer.classList.remove("hide")
    
    senha.innerText=resultado
})
activePass.addEventListener("click",()=>{
    optionsPassContainer.classList.remove("hide")
})























