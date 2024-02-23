const nav1=document.querySelector("#nav-1")
const nav2=document.querySelector("#nav-2")

nav1.style.opacity="0"
nav2.style.opacity="0"

window.addEventListener("scroll", (e)=>{
    let posicaoY = window.scrollY;
        if (posicaoY>=180 && posicaoY<=640){
            nav1.style.opacity="1"
            nav2.style.opacity="1"
            nav1.style.transition = "transform 0.3s ease";
            nav2.style.transition = "transform 0.3s ease";
            nav1.style.transform = "translateY(0%)";
            nav2.style.transform = "translateY(0%)";
        } else {
            nav1.style.opacity="0"
            nav2.style.opacity="0"
            nav1.style.transition = "transform 0.3s ease";
            nav2.style.transition = "transform 0.3s ease";
            nav1.style.transform = "translateY(-100%)";
            nav2.style.transform = "translateY(-100%)";
            nav1.style.transition = "opacity 0.2s ease ";
            nav2.style.transition = "opacity 0.2s ease";
        }
        
})

const iphoneAzul=document.querySelector("#azul")
const iphoneRosa=document.querySelector("#rosa")
const iphoneMeiaNoite=document.querySelector("#meia-noite")
const iphoneEstelar=document.querySelector("#estelar")
const iphoneVerde=document.querySelector("#verde")
const iphoneRed=document.querySelector("#red")

const azul=document.querySelector("#input-azul")
const rosa=document.querySelector("#input-rosa")
const meiaNoite=document.querySelector("#input-meia-noite")
const estelar=document.querySelector("#input-estelar")
const verde=document.querySelector("#input-verde")
const red=document.querySelector("#input-red")

const selAzul=document.querySelector("#sel-azul")
const selRosa=document.querySelector("#sel-rosa")
const selMeiaNoite=document.querySelector("#sel-meia-noite")
const selEstelar=document.querySelector("#sel-estelar")
const selVerde=document.querySelector("#sel-verde")
const selRed=document.querySelector("#sel-red")


const labelAzul=document.querySelector("#label-azul")
const labelRosa=document.querySelector("#label-rosa")
const labelMeiaNoite=document.querySelector("#label-meia-noite")
const labelEstelar=document.querySelector("#label-estelar")
const labelVerde=document.querySelector("#label-verde")
const labelRed=document.querySelector("#label-red")

const labelAzulText=labelAzul.textContent
const labelAzulArray=labelAzulText.split(" ")

const labelRosaText=labelRosa.textContent
const labelRosaArray=labelRosaText.split(" ")

const labelMeiaNoiteText=labelMeiaNoite.textContent
const labelMeiaNoiteArray=labelMeiaNoiteText.split(" ")

const labelEstelarText=labelEstelar.textContent
const labelEstelarArray=labelEstelarText.split(" ")

const labelVerdeText=labelVerde.textContent
const labelVerdeArray=labelVerdeText.split(" ")

const labelRedText=labelRed.textContent
const labelRedArray=labelRedText.split(" ")

const labels=document.querySelector(".labels")
const imgs=document.querySelector(".iphone-carrousel")
const imgsSelected=document.querySelector(".selected-imgs")

const colorTitle=document.querySelector("#color-title")


labels.childNodes.forEach(node => {
    if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
        node.style.display = "none";
    }
});

imgsSelected.childNodes.forEach(node => {
    if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
        node.style.display = "none";
    }
});

imgs.childNodes.forEach(node => {
    if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
        node.style.display = "none";
    }
});



azul.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelAzul.style.display="block"
    iphoneAzul.style.display="block"
    selAzul.style.display="block"
    colorTitle.textContent=`${labelAzulArray[2]}`

    
    
})
rosa.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelRosa.style.display="block"
    iphoneRosa.style.display="block"
    selRosa.style.display="block"
    colorTitle.textContent=`${labelRosaArray[2]}`
})
meiaNoite.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelMeiaNoite.style.display="block"
    iphoneMeiaNoite.style.display="block"
    selMeiaNoite.style.display="block"
    colorTitle.textContent=`${labelMeiaNoiteArray[2]}`
})
estelar.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelEstelar.style.display="block"
    iphoneEstelar.style.display="block"
    selEstelar.style.display="block"
    colorTitle.textContent=`${labelEstelarArray[2]}`
})
verde.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelVerde.style.display="block"
    iphoneVerde.style.display="block"
    selVerde.style.display="block"
    colorTitle.textContent=`${labelVerdeArray[2]}`
})
red.addEventListener("click",(e)=>{
    imgs.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    imgsSelected.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labels.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.display = "none";
        }
    });
    labelRed.style.display="block"
    iphoneRed.style.display="block"
    selRed.style.display="block"
    colorTitle.textContent=`${labelRedArray[2]}`
})

const label128=document.querySelector("#storage-label-128")
const label256=document.querySelector("#storage-label-256")
const label512=document.querySelector("#storage-label-512")

const input128=document.querySelector("#storage-input-128")
const input256=document.querySelector("#storage-input-256")
const input512=document.querySelector("#storage-input-512")

const iphoneStorage=document.querySelector(".iphone-storage")

const price128=document.querySelectorAll(".real-price-128")
const price256=document.querySelectorAll(".real-price-256")
const price512=document.querySelectorAll(".real-price-512")


const iphonePrices=document.querySelectorAll(".iphone-price")

function updatePrice(newPrice) {
    iphonePrices.forEach(priceElement => {
        priceElement.textContent = newPrice;
    });
}



const iphonePriceX12=document.querySelector(".iphone-price-12")
const iphonePriceDescount=document.querySelector("#iphone-descont-10")
const storageValue128=document.querySelector("#storage-value-128")
const storageValue256=document.querySelector("#storage-value-256")
const storageValue512=document.querySelector("#storage-value-512")
const storageTitle=document.querySelector("#storage-title")


iphoneStorage.childNodes.forEach(node => {
    if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
        node.style.border = "border: 1px solid #ccc;";
    }
});

input128.addEventListener("click", (e)=>{
    iphoneStorage.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.border = " 1px solid #ccc";
        }
    });
    const selectedPrice = price128[0].textContent.trim(); // Use price128
    updatePrice(selectedPrice);

    const priceAsNumber = parseFloat(selectedPrice.replace('R$', '').replace('.', '').replace(',', '.')); // Converter string para número
    const monthlyPrice = (priceAsNumber / 12).toFixed(2);

    const descountPrice=(priceAsNumber - (priceAsNumber*(10/100)))
    iphonePriceDescount.textContent=`${descountPrice}`;

    storageTitle.textContent=`${storageValue128.textContent}`
    iphonePriceX12.textContent = `${monthlyPrice}/mês`;
    label128.style.border = "2px solid #162beb";
})
input256.addEventListener("click", (e)=>{
    iphoneStorage.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.border = " 1px solid #ccc";
        }
    });
    const selectedPrice = price256[0].textContent.trim(); // Use price256
    updatePrice(selectedPrice);

    const priceAsNumber = parseFloat(selectedPrice.replace('R$', '').replace('.', '').replace(',', '.')); // Converter string para número
    const monthlyPrice = (priceAsNumber / 12).toFixed(2);
    iphonePriceX12.textContent = `${monthlyPrice}/mês`;

    const descountPrice=(priceAsNumber - (priceAsNumber*(10/100)))
    iphonePriceDescount.textContent=`${descountPrice}`;

    storageTitle.textContent=`${storageValue256.textContent}`
    label256.style.border = "2px solid #162beb";
})

input512.addEventListener("click", (e)=>{
    iphoneStorage.childNodes.forEach(node => {
        if (node.nodeType === 1) { // Verificar se é um elemento (Node.ELEMENT_NODE)
            node.style.border = " 1px solid #ccc";
        }
    });
    const selectedPrice = price512[0].textContent.trim(); // Use price512
    updatePrice(selectedPrice);

    const priceAsNumber = parseFloat(selectedPrice.replace('R$', '').replace('.', '').replace(',', '.')); // Converter string para número
    const monthlyPrice = (priceAsNumber / 12).toFixed(2);
    iphonePriceX12.textContent = `${monthlyPrice}/mês`; 

    const descountPrice=(priceAsNumber - (priceAsNumber*(10/100)))
    iphonePriceDescount.textContent=`${descountPrice}`;

    storageTitle.textContent=`${storageValue512.textContent}`
    label512.style.border = "2px solid #162beb";
})
azul.click()
input256.click()
















