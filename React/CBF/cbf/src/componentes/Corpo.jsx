import React, {useState} from 'react'

import Dados from './Dados'

import State  from './state'

import Eventos from './Eventos'

import Render from './Render'

import List from './List'

const Corpo = () => {
  // funcao na prop
  const canal=()=>{
    return "CBF Cursos"
  }
  const youtube="Youtube.com"
  const curso="React"

  const somaAB=(a,b)=>{
    return a+b
  }
  // btn ligar desligar

  const [ligado,setLigado]=useState(false)
  const ligarDesligar=()=>{
    setLigado((object)=>(
      object= !object
  ))
  }

  return (
    <section>   
        <h2>Curso de React</h2>
        <Dados
        // assim que passa o valor de uma funcao para prop
        canal={canal()} 
        youtube={youtube}
        curso={curso}
        somar={somaAB}/>
        <State/>
        <Eventos ligado={ligado} ligarDesligar={ligarDesligar}/>
        <Render/>
        <List/>
    </section>

  )
}

export default Corpo