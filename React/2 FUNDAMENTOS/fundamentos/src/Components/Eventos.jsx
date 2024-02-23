import React from "react"

const Eventos=()=> {
    const handleClck=()=>{
        console.log("Ta pegando paizao")
    }
    const renderSomething=(x)=>{
        if(x){
            return <h3>Renderizando isso</h3>
        } else{
            return <h3>Renderizando outra coisa</h3>
        }
    }
  return (
    <div>
    <button onClick={()=>console.log("Voce clicou no botao")}>
        Clique aqui
    </button>
    <button onClick={handleClck}>Clique aqui - com funcao</button>
    {renderSomething(false)}
    {renderSomething(true)}

    </div>
    
  )
}

export default Eventos




