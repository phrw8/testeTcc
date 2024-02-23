const inputPeso=document.querySelector("#input-peso")
const inputAltura=document.querySelector("#input-altura")
const btnSubmit=document.querySelector("#btn-submit")
const imgGorda=document.querySelector("#gorda")
const imgNormal=document.querySelector("#normal")
const imgMagro=document.querySelector("#magro")
const table=document.querySelector("#res1")

const calcIMC=function(){
    const peso=inputPeso.value
    const altura=inputAltura.value
    
    if(peso<=0 || peso == NaN || altura<=0 || altura ==NaN) {
        console.log("Valores invalidos")
    }
    let imc= peso/ ((altura/100)*(altura/100))

    imgGorda.style.display="none";
    imgMagro.style.display="none";
    imgNormal.style.display="none";

    if(imc<=18){
        imgMagro.style.display="block"
    }
     else if(imc>18 && imc<25){
        imgNormal.style.display="block"
    }
     else if(imc>=25){
        imgGorda.style.display="block"
    }

    const rows=document.querySelectorAll("tr")
    rows.forEach((row, index) => {
        if(index !== 0){
            row.remove()
        }
    });
    

    const newRow=table.insertRow(-1)
    
    for(let i=1; i <=3; i++){
        const collumn=document.createElement("th")
        if(i===1){
            collumn.textContent=peso
        }
        if(i===2){
            collumn.textContent=altura
        }
        if(i===3){
            collumn.textContent=imc.toFixed(2)
        }
        newRow.appendChild(collumn)
    }
    
    
}
btnSubmit.addEventListener("click",calcIMC)