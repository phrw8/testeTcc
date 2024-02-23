



function contar(n){
    let cont=0
    for(let i=0;i<n;i++){
        cont++
    }
    return cont
}
console.log(contar(3))

function contarP(n){
    let cont=0
    let contP= new Promise((res,rej)=>{
        setTimeout(()=>{
            for(let i =0; i<n;i++){
                cont++
            }
            if(cont==n){
                res(cont) 
            } else{
                rej("erro")
            }
        },2000)
    })
    return contP
}
function somaPositivos (n1,n2){
    let p= new Promise((res,rej)=>{
        if(n1>0&& n2>0){
            res(n1+n2)
        } else{
            rej("error")
        }
    })
    return p
    
}
function somaPositivosT (n1,n2){
    let p= new Promise((res,rej)=>{
        if(n1>0&& n2>0){
            res(n1+n2)
        } else{
            rej("error")
        }
    })
    return p
    
}


contarP(120)
    .then(sucesso=>console.log(`Sucesso:${sucesso}`))
    .catch(error=>console.log(error))
console.log(somaPositivos(1,2))

