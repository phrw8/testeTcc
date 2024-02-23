// numero
console.log(2);
console.log(typeof 2)
console.log(typeof 2.5)
console.log(typeof -2)

// operacao aritmetica
console.log(8- 2)
console.log(16 - (14*2) / 2)

// special caracter
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)

console.log(12* Infinity)
console.log(12* 'abc')

// strings
console.log("Texto com aspas duplas");
console.log('Texto com aspas simples');
console.log(`Texto com crase`);

// simbolos especiais

console.log("Texto com \n quebra de linha");
console.log("Texto com \t espaçamento de tab");

// concatenaçao
console.log("Meu" + "texto" + "concatenado")

// Interpolação (Templete strings) tem que ser usada em crase``
console.log(`A soma de 2+2 é ${2 + 2}`) 

// Booleans
console.log(true);
console.log(false);
console.log(5>20);
console.log(5<20);

// comparacoes
console.log(5<=5)
console.log(5<5)
console.log(10==10)
console.log(10==9)
console.log(10== "10")
console.log(10 === "10")
console.log(10 !== "10")
console.log(10 != "10")
console.log(9 + "9")

// opeeradores logicos

console.log(true && true);
console.log(5>2 && 10>4)

console.log(3>4 && 3>1)
console.log(2>5 || 4<8)
console.log(2>5 || 4<4)

console.log(3>4);
console.log(!(4<6))

// empty value 

console.log(typeof null, typeof undefined)
console.log(null==undefined)
console.log(null===undefined)
console.log(null== false)
console.log(undefined== false)

// mudança de tipos de dados

console.log(5*null)
console.log("oi" * "Tudo")
console.log("10" + 1)
console.log("10" - 1)