const inpDesY=document.querySelector("#des-y")
const yValue=document.querySelector("#y-value")
const inpDesX=document.querySelector("#des-x")
const xValue=document.querySelector("#x-value")
const inpBlur=document.querySelector("#blur")
const blurValue=document.querySelector("#blur-value")
const inpSpread=document.querySelector("#spread")
const spreadValue=document.querySelector("#spread-value")
const inpColor=document.querySelector("#color")
const colorValue=document.querySelector("#color-value")
const inpOpacity=document.querySelector("#opacity")
const opacityValue=document.querySelector("#opacity-value")
const inpSomInt=document.querySelector("#sombra-interna")
const quadrado=document.querySelector(".quadrado")
const pBoxShadow=document.querySelector("#box-shadow")
const pWebkit=document.querySelector("#webkit")
const pMoz=document.querySelector("#moz")
const containerResultGlobal=document.querySelector(".result")
const containerResult=document.querySelectorAll(".result p")
const copyAlert=document.querySelector("#copy-alert")

function shadowGenarator(inset, DX, DY, IB, IE, COR, OP) {
    const rgbaColor = hexToRgb(COR, OP);
    let shadowBox = "";

    if (inset == 1) {
        quadrado.style.boxShadow = ` inset ${DX}px ${DY}px ${IB}px ${IE}px ${rgbaColor} `;
        shadowBox = `inset ${DX}px ${DY}px ${IB}px ${IE}px ${rgbaColor}`;
    } else {
        quadrado.style.boxShadow = ` ${DX}px ${DY}px ${IB}px ${IE}px ${rgbaColor} `;
        shadowBox = `${DX}px ${DY}px ${IB}px ${IE}px ${rgbaColor}`;
    }

    pBoxShadow.textContent = `box-shadow:${shadowBox}`;
    pWebkit.textContent = `-webkit-box-shadow:${shadowBox}`;
    pMoz.textContent = `-moz-box-shadow:${shadowBox}`;
}
function updateGenarator(){
        shadowGenarator(inpSomInt.checked,inpDesX.value,inpDesY.value,inpBlur.value,inpSpread.value,inpColor.value,inpOpacity.value)
    
}
function hexToRgb(hex,opacity) {
    return `rgba(${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
    ("0x" + hex[5] + hex[6]) | 0} ,${ opacity})`;
}

containerResultGlobal.addEventListener("click", () => {
    // Selecionando o texto dentro do elemento
    const tempTextArea = document.createElement("textarea");
    containerResult.forEach((p)=>{
        const textoParaCopiar = p.textContent;

        
        tempTextArea.value = tempTextArea.value + textoParaCopiar;

        
    })
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
    copyAlert.textContent="Texto copiado para a área de transferência!"
});


inpDesY.addEventListener("input",()=>{
    yValue.value=inpDesY.value
    updateGenarator()
})
inpDesX.addEventListener("input",()=>{
    xValue.value=inpDesX.value
    updateGenarator()
})
inpBlur.addEventListener("input",()=>{
    blurValue.value=inpBlur.value
    updateGenarator()
})
inpSpread.addEventListener("input",()=>{
    spreadValue.value=inpSpread.value
    updateGenarator()
})
inpOpacity.addEventListener("input",()=>{
    opacityValue.value=inpOpacity.value
    updateGenarator()
})
inpColor.addEventListener("input",()=>{
    colorValue.value=inpColor.value
    updateGenarator()
})
inpSomInt.addEventListener("input", () => {

    updateGenarator();
});
updateGenarator();



























































