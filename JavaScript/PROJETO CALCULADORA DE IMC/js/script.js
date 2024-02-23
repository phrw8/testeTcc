
const inputAltura=document.querySelector("#input-altura")
const inputPeso=document.querySelector("#input-peso")
const btnCalcular=document.querySelector("#btn-calcular")
const btnLimpar=document.querySelector("#btn-limpar")
const mainContainer=document.querySelector("#main-container")
const imcResult=document.querySelector("#IMC-result")
const imcClassificacao=document.querySelector("#IMC-classificacao")
const resultContainer=document.querySelector("#result-container")
const btnVoltar=document.querySelector("#btn-voltar")
const calcIMC = () => {
    const imc = inputPeso.value / ((inputAltura.value / 100) * (inputAltura.value / 100)); 
    return imc
};
const functionClass = () => {
    const imc = calcIMC();
    if(imc<18.5){
        imcClassificacao.textContent=`Magreza`
    } else if(imc>18.5 && imc<24.9){
        imcClassificacao.textContent=`Normal`
    } else if(imc>=25 && imc<=29.9){
        imcClassificacao.textContent=`Sobrepeso`
    } else if(imc>=30 && imc<=39.9){
        imcClassificacao.textContent=`Obeso`
    }  else if(imc>=40){
        imcClassificacao.textContent=`Obeso Extremo`
}
}

btnCalcular.addEventListener("click", (e)=>{
    const altura = parseFloat(inputAltura.value);
    const peso = parseFloat(inputPeso.value);

    if (isNaN(altura) || isNaN(peso) || altura == 0 ||peso ==0) {
        console.log("Valores inválidos");}
        else{
        mainContainer.style.display="none"
        resultContainer.style.display="flex"
        imcResult.textContent=calcIMC().toFixed (2)
        functionClass()
}
})
btnLimpar.addEventListener("click", (e)=>{
    inputAltura.value=""
    inputPeso.value=""
})
btnVoltar.addEventListener("click", (e)=>{
    mainContainer.style.display="flex"
    resultContainer.style.display="none"
})
