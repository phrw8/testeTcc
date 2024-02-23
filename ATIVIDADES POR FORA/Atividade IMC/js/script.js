const inputPeso=document.querySelector("#input-peso")
const inputAltura=document.querySelector("#input-altura")
const btnSubmit=document.querySelector("#btn-submit")
const resultObeso=document.querySelector("#gorda")
const resultNormal=document.querySelector("#normal")
const resultMagro=document.querySelector("#magro")

let table = document.querySelector("#res1");


const calcIMC=function(){
     const peso=parseFloat(inputPeso.value)
     const altura=parseFloat(inputAltura.value)

     if(peso<=0 || peso <= undefined || altura<=0 || altura <= undefined){
        console.log("valor invalido")
        retorn
    }
      imc = peso / ((altura/100) * (altura/100))
    
      resultMagro.style.display = "none";
      resultNormal.style.display = "none";
      resultObeso.style.display = "none";

      
    if (imc < 18) {
        resultMagro.style.display = "block";
    } else if (imc >= 18 && imc <= 25) {
        resultNormal.style.display = "block";
    } else if (imc > 25) {
        resultObeso.style.display = "block";
    }

    let rows=table.querySelectorAll("tr")
    rows.forEach((row,index)=>{ 
        if(index !== 0){
            row.remove()
        }
    }
    )
    
    
    let newRow = table.insertRow(-1);
    for (let i = 0; i < 3; i++) {
        let collumn = document.createElement("th");
    
        // Adiciona o texto nas células de cabeçalho
        if (i === 0) {
            collumn.textContent = peso;
        } else if (i === 1) {
            collumn.textContent = altura;
        } else if (i === 2) {
            collumn.textContent = imc.toFixed(2);
        }
    
        // Adiciona a célula de cabeçalho à linha
        newRow.appendChild(collumn);
    }
    table.appendChild(newRow);
}
btnSubmit.addEventListener("click",calcIMC)




// Adiciona a linha à tabela

// const inputPeso = document.querySelector("#input-peso");
// const inputAltura = document.querySelector("#input-altura");
// const btnSubmit = document.querySelector("#btn-submit");
// const resultObeso = document.querySelector("#gorda");
// const resultNormal = document.querySelector("#normal");
// const resultMagro = document.querySelector("#magro");
// let table = document.querySelector("#res1");

// const calcIMC = function () {
//     const peso = parseFloat(inputPeso.value);
//     const altura = parseFloat(inputAltura.value);

//     // Verifica se os valores são válidos
//     if (peso <= 0 || isNaN(peso) || altura <= 0 || isNaN(altura)) {
//         console.log("Valor inválido");
//         return;
//     }

//     let imc = peso / ((altura / 100) * (altura / 100));

//     resultMagro.style.display = "none";
//     resultNormal.style.display = "none";
//     resultObeso.style.display = "none";

//     if (imc < 18) {
//         resultMagro.style.display = "block";
//     } else if (imc >= 18 && imc <= 25) {
//         resultNormal.style.display = "block";
//     } else if (imc > 25) {
//         resultObeso.style.display = "block";
//     }

//     // Remove as linhas existentes da tabela
//     let rows = table.querySelectorAll("tr");
//     rows.forEach((row, index) => {
//         if (index !== 0) {
//             // Mantém o cabeçalho, remove as outras linhas
//             row.remove();
//         }
//     });

//     // Cria uma nova linha
//     let newRow = table.insertRow(-1);

//     for (let i = 0; i < 3; i++) {
//         let cell = newRow.insertCell(i);

//         // Adiciona o texto nas células
//         if (i === 0) {
//             cell.textContent = peso;
//         } else if (i === 1) {
//             cell.textContent = altura;
//         } else if (i === 2) {
//             cell.textContent = imc.toFixed(2);
//         }
//     }
// };

// btnSubmit.addEventListener("click", calcIMC);






























