// valores
const numeroTabuada=document.querySelector("#numero-tabuada")
const numeroMultiplicador=document.querySelector("#numero-multiplicador")
const btnSubmit=document.querySelector("#btn-submit")
const table=document.querySelector("#table")

// funçoes
tabuadaCalc=(numTabuada,numMultiplicador)=>{
   

   for(let i=0; i<=numMultiplicador; i++){

      let result=numTabuada*i
      const newRow=table.insertRow(-1)

      for(let p=1; p<=3;p++ ){
         
         const collumn=document.createElement("td")
         
         if(p == 1){
            collumn.textContent=numTabuada
         }
         if(p == 2){
            collumn.textContent=i
         }
         if(p == 3){
            collumn.textContent=result
         }
         newRow.appendChild(collumn)
      }
   }
    
 }

//  eventos
 btnSubmit.addEventListener("click",(e)=>{
   e.preventDefault()

   const numTabuada = parseInt(numeroTabuada.value);
    const numMultiplicador = parseInt(numeroMultiplicador.value);

    const rows=document.querySelectorAll("tr")
    rows.forEach((row, index) => {
      if(index !== 0){
         row.remove()
      }
    });
    if (numMultiplicador <= 0 || numTabuada <= 0 || isNaN(numMultiplicador) || isNaN(numTabuada)) {
      console.log("Valores inválidos. A tabuada não pode ser calculada.");
  } else {
      tabuadaCalc(numTabuada, numMultiplicador);
  }
   

    
 })

















 