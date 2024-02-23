import React, {useState}from 'react'
import ledVerde from './imgs/ledVerde.jpg'
import ledVermelho from './imgs/ledVermelho.jpg'
const Eventos = (prop) => {
  return (
    <div>
      <img style={{width:"50px", height:"50px"}} src={prop.ligado ? ledVerde : ledVermelho} alt="" />
      <button onClick={()=>prop.ligarDesligar()} >{prop.ligado ? 'Desligar' : 'Ligar'}</button>
    </div>
  ) 
}

export default Eventos