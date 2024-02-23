// movendo se no DOM
console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// Selecionar elementos pode ser por classe id seletor de css

//selecionando por tag
const listItens= document.getElementsByTagName("li")

console.log(listItens)

// selecionando por ID

const title =document.getElementById("title")
console.log(title)

// selecionando por classe 

const produtos = document.getElementsByClassName("produtos")
console.log(produtos)

// selecionando por regra de css

const mainContainer= document.querySelector("#main-container")
console.log(mainContainer)

const produtosQuery=document.querySelectorAll(".produtos")
console.log(produtosQuery)

// inserir um elemento antes 

const p = document.createElement("p")

const header= title.parentElement

console.log(header)

// nesse metodo o p é o novo elemento que vai ser adicionado e o title é a referencia de onde vai se posto o novo elemento
header.insertBefore(p,title)

// const h5 = document.createElement("h5")

// mainContainer.insertBefore(h5,navLinks)

// console.log(h5)
// console.log(ul)


// inserir elememto dentro de um elemnto

const navLinks=document.querySelector("#main-container ul")

const li = document.createElement("li")

navLinks.appendChild(li)

const footer = document.getElementById("footer")

footer.appendChild(p)

console.log(footer)
// trocar um elemento

const h2= document.createElement("h2")

h2.textContent="Meu novo titulo"

header.replaceChild(h2,title)

// trabalhando com atributos

const firstLink= navLinks.querySelector("a")
console.log(firstLink)

firstLink.setAttribute("href" , "https://www.google.com")

console.log(firstLink.href)

firstLink.setAttribute("target", "_blank")

// altura e largura

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

// pega o tamanho so de elemento e desconsidera a borda
console.log(footer.clientHeight)
console.log(footer.clientWidth)

// posição do elemento

const produto1=produtos[0]

console.log(produto1.getBoundingClientRect() )

// css com js
mainContainer.style.color="red"
mainContainer.style.backgroundColor="blue"

mainContainer.style.paddingBottom="17px"

// alterando estilo de varios elementos

for(const li of listItens){
    li.style.backgroundColor="red"
}
















