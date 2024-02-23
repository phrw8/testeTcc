import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './teste.css'

function App() {
  const textDestaque={
    color:"#fff",
    fontSize:"3rem"
  }

  return (
    <>
      <h1 style={{color:"#f77", fontSize:"5rem"}}>CBF Cursos </h1>
      <h2 style={textDestaque} >Curso de React</h2>
      <p className='texto' >Se inscreva em nosso canal e nos siga no instagram</p>
    </>
  )
}

export default App
