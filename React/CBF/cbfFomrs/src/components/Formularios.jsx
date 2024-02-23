import React, { useState } from 'react'

const Formularios = () => {
    const [nome,setNome]=useState("")
    const [carro,setCarro]=useState("Cruze")
  return (
    <>
        <label htmlFor="">Digite seu nome:</label>
        <input type="text" name='fnome' value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <p>O nome digitado é {nome}</p>

        <label htmlFor="">Selecione um carro:</label>
        <select value={carro} onChange={(e)=>setCarro(e.target.value)}> 
            <option value="cruze" >Cruze</option>
            <option value="civic" >civic</option>
            <option value="corolla">corolla</option>
        </select>
        <p>	O carro selecionado é {carro}</p>

    </>
  )
}

export default Formularios