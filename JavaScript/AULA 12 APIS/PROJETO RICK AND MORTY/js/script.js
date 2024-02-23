const inpCaracther=document.querySelector("#inpCaracthers")
const contantContainer=document.querySelector("#contant")
const img=document.querySelector("#img")
const btnSubmit=document.querySelector("#btn-submit")
const btnClear=document.querySelector("#btn-clear")

const fecthAPI = (value) => {
    return fetch(`https://rickandmortyapi.com/api/character/${value}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Erro ao obter dados da API');
            }
            return res.json();
        })
        .then((data) => {
            return data; // Retorna os dados obtidos da API
        })
        .catch((error) => {
            console.error(error);
        });
};

fecthAPI(2)
const criarDesc=(dados)=>{
    
    const div = criarDiv(dados,0)
    div.style.display="flex"

    const moreContainer=document.createElement("div")
    moreContainer.classList.add("more-container")

    const infoContainer=document.createElement("div")
    infoContainer.classList.add("info-container")
    
    const descContainer=document.createElement("div")
    descContainer.classList.add("desc-container")

    const btnVoltar=document.createElement("button")
    btnVoltar.classList.add("btn-voltar")
    btnVoltar.innerText="Voltar"

    btnVoltar.addEventListener(("click"), (e)=>{
        e.preventDefault()
        btnClear.disabled=false
        btnSubmit.disabled=false
        inpCaracther.disabled = false;
        moreContainer.remove()
        const divs = Array.from(contantContainer.querySelectorAll("div")); // Converter NodeList para Array
            
            divs.forEach((elem)=>{
                elem.style.display="flex"

            })
        
    })

    const p = document.createElement("p")
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam beatae eum et cupiditate possimus, iusto nulla consequuntur maxime deserunt explicabo sapiente libero. Qui autem suscipit beatae, voluptas laudantium quia?"

    const h3Gender=document.createElement("h3")
    h3Gender.classList.add("desc-elements")
    h3Gender.innerText=`Gender: ${dados.gender}`

    const h3Location=document.createElement("h3")
    h3Location.classList.add("desc-elements")
    h3Location.innerText=`Location: ${dados.location.name}`

    const h3Created=document.createElement("h3")
    h3Created.classList.add("desc-elements")
    h3Created.innerText=`Created: ${dados.created}`

    const h3Epsodes=document.createElement("h3")
    h3Epsodes.classList.add("desc-elements")
    const arrayEpsodes=dados.episode

    const showArrayEpsodes=arrayEpsodes.join(", ")
    h3Epsodes.innerText=`Episodes: ${showArrayEpsodes}`
    
    descContainer.appendChild(btnVoltar)
    descContainer.appendChild(p)
    descContainer.appendChild(h3Gender)
    descContainer.appendChild(h3Location)
    descContainer.appendChild(h3Created)
    descContainer.appendChild(h3Epsodes)

    moreContainer.appendChild(div)
    moreContainer.appendChild(descContainer)

    contantContainer.appendChild(moreContainer)

}
const criarDiv=(dados,card=1)=>{
    // contantContainer.innerHTML=""
    console.log(dados)
    const divCard=document.createElement("div")
    divCard.classList.add("card")

    divImg=document.createElement("div")
    divImg.classList.add("img")

    const img=document.createElement("img")
    img.src=dados.image
    divImg.appendChild(img)
    img.id=dados.id
    
    img.addEventListener(("click"),(e)=>{
        if(card){
            btnClear.disabled=true
            btnSubmit.disabled=true
            inpCaracther.disabled = true;

            const divs = Array.from(contantContainer.querySelectorAll("div")); // Converter NodeList para Array
            
            divs.forEach((elem)=>{
                elem.style.display="none"

            })
             
            fecthAPI(e.target.id)
            .then((dados) => {
                criarDesc(dados);
                console.log(dados)
            });
        }
        
    })
    divInfoContainer=document.createElement("div")
    divInfoContainer.classList.add("info-container")

    const h3Nome=document.createElement("h3")
    h3Nome.classList.add("nome")
    h3Nome.innerText=`Name: ${dados.name} (${dados.id})`
    
    
    const h3Especie=document.createElement("h3")
    h3Especie.classList.add("especie")
    h3Especie.innerText=`Specie: ${dados.species}`

    const h3Status=document.createElement("h3")
    h3Status.classList.add("status")
    h3Status.innerText=`Status: ${dados.status}`

    const h3Origem=document.createElement("h3")
    h3Origem.classList.add("origem")
    h3Origem.innerText=`Origin: ${dados.origin.name}`
    
    divInfoContainer.appendChild(h3Nome);
    divInfoContainer.appendChild(h3Especie);
    divInfoContainer.appendChild(h3Status);
    divInfoContainer.appendChild(h3Origem);
    

    divCard.appendChild(divImg);
    divCard.appendChild(divInfoContainer);

    if(card){
        contantContainer.appendChild(divCard)
    }
    else{
        return divCard
    }
    
   
}



btnSubmit.addEventListener(("click"),(e)=>{
    e.preventDefault();
     const inputValue = inpCaracther.value;

     const arrayCaracther = inputValue.split(",").map(item => item.trim());
 
     arrayCaracther.forEach((id) => {
         // Trata cada item como desejado
         fecthAPI(id)
             .then((dados) => {
                 criarDiv(dados);
                 
             });
     });
 
     // Limpa o valor do input
     inpCaracther.value = "";
 });
btnClear.addEventListener(("click"),(e)=>{
    e.preventDefault()
    contantContainer.innerHTML=""
    inpCaracther.value=""
})










