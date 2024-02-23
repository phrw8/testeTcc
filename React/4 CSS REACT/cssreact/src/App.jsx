import { useState } from 'react'
import MyComponent from './componentes/MyComponent'
import Tilte from './componentes/Title'

function App() {
  const n=15

  const redTitle=true

  return (
    <>
      <h1>CSS no React</h1>
      <MyComponent/>
      <p style={{color:"red", padding:"1rem"}}>Esse elemto tem estilo inline</p>
      {/* style inline dinamico */}
      <h2 style={n > 10 ? {color:"purple"} : {color:"red"}}>CSS inline dinamico</h2>
      <h2 style={n > 20 ? {color:"purple"} : {color:"magenta"}}>CSS inline dinamico 2</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Este texto vai ter uma classe</h2>
      <Tilte/>
    </>
  )
}

export default App
