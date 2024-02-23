import './App.css'
import night from "./assets/city.jpg"

// use state
import  Data from "./componentes/Data"

// renderizaão de lista
import ListRender from './componentes/ListRender'

import Desestruturar from './componentes/Desestruturar'

import { useState } from 'react'

import Fragment from './componentes/Fragment'

import Children from './componentes/Children'

import PropFunction from './componentes/PropFunction'

import ChangeMessage from './componentes/ChangeMessage'

import Message from './componentes/Message'

function App() {
  const [objectList,setObjects]=useState([
    {id:1, nome:"Paulo", age:19 },
    {id:2, nome:"Murilo", age:12 },
    {id:3, nome:"Felipe", age:38 }
])

const funcaoProp=()=>{
 console.log("Ola")
}

const [mensagem,setMensagem]=useState("")

const handChange=(msg)=>{
  setMensagem(msg)
}

  return (
    <div className='App' style={{paddingBottom:"500px"}}>
      <h1>Avancando em React</h1>
      {/* Inserindo imagem no public */}
      <img src="/img1.jpg" alt="Imagem" />
      {/* imagem no src */}
      <img src={night} alt="Outra imagem" />

      <Data/>
      <ListRender/>
      <Desestruturar nome="Paulo" idade="19"/>
      <Desestruturar nome="Joao" idade="15"/>
      
      { objectList.map((user)=>(
        <Desestruturar key={user.id} nome={user.nome} idade={user.age}/>
      ))
      }

      <Fragment/>

      <Children>
        <p>Texto usando props.children</p>
      </Children>

      <PropFunction myfunction={funcaoProp}/>

      <Message msg={mensagem}/>
      <ChangeMessage handChange={handChange} />

    </div>
  )
}

export default App
