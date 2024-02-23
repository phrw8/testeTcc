// Metodos  (funçoes dentro de objetos)
const animal ={
    nome: "bob",

    latir: function(){
        console.log("auau")
    },
}

console.log(animal.nome)

animal.latir()

const pessoa ={
    nome:"Paulo",
    getNome: function(){
        return this.nome
    },

    setNome:function(novoNome){
        this.nome = novoNome
    }
}
console.log(pessoa.getNome())

pessoa.setNome("Pauladas")

console.log(pessoa.nome)

// prototype
const text = "add"

console.log(Object.getPrototypeOf(text)) 


const myObject ={
    a:"b"
}

console.log(Object.getPrototypeOf(myObject))

const mySecundObject = Object.create(myObject)

console.log(mySecundObject)

// classes



// aqui tem a classe cachorro
const cachorro={ 
    raça:null,
    patas:4,
}

// pra nao ficar repetindo o mesmo processo usa o metodo create, que cria um novo objeto usando outro
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raça= "Pastor Alemao"

console.log(pastorAlemao)
// mais um exemplo
const bulldog = Object.create(cachorro)

bulldog.raça = "Bulldog"

console.log(bulldog)


// funcao como classe // funcao construtura

function criaCachorro(nome,raça){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raça = raça

    return cachorro
}

console.log(criaCachorro("bob", "Vira-lata"))

const bob = criaCachorro("bob","Vira-lata")

console.log(bob)

function Cachorro(nome,raça){
    this.nome= nome,
    this.raça=raça
}
const labrador = new Cachorro("Pastel","Labrador")
console.log(labrador)


// metodos na funcao construtura

 Cachorro.prototype.uivar= function(){
    console.log("Auuuuuuuuuuu!")
 }

 console.log(Cachorro.prototype)

 labrador.uivar()


// classeES6 (classe mais nova)

class CachorroClase{
    constructor(nome,raça){
        this.nome=nome,
        this.raça=raça
    }
}
const jeff = new CachorroClase("Jeff", "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// nao se adiciona diretamente as propriedades as classes

class Caminhao {
    constructor (eixos, cor){
        this.eixos = eixos,
        this.cor=cor
    }
    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}
const scania =  new Caminhao(6, "Vermelha")


console.log(scania)

scania.descreverCaminhao()

const c2= new Caminhao(4, "preta")

console.log(c2)

Caminhao.prototype.motor=4.0

c2.descreverCaminhao()

console.log(c2)

// Override (altera as propriedades do constructure da classe no prototype)

class Humano {
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
}
const paulo=  new Humano("Paulo","17")

console.log(paulo)

Humano.prototype.idade="Nao definida"

console.log(Humano.prototype)


// symbol (atributo que nao vai ser alterado com o decorrer do uso da classe)

class Aviao{
    constructor(marca,turbinas){
        this.marca=marca
        this.turbinas=turbinas
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas]=2;
Aviao.prototype[pilotos]=3;

const boeing = new Aviao("Boeing",10)

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// getters e setters

class Post{
    constructor (titulo,descricao,tags){
        this.titulo=titulo
        this.descricao=descricao
        this.tags=tags
    }
    get exibirTitulo(){
        return `Voce esta lendo ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(",")
        this.tags = tagsArray
    }

}
const myPost = new Post("Algum post", "é um post de programaçao" )

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programacao, javasript, js"

console.log(myPost.tags)
console.log(myPost)

// heranca

class Mamifero {
    constructor (patas, nome){
        this.patas= patas
        this.nome=nome
    }

}

class Lobo extends Mamifero {
    constructor (patas,nome){
        super(patas,patas)
        this.nome=nome
    }
}

const shark = new Lobo(4,"Shark")

console.log(shark)

console.log(shark.patas)

// instance of

console.log(shark instanceof Lobo)


// o instance of so verifica de objeto para pai,nao de classe
console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "teste") instanceof Mamifero)





 


































