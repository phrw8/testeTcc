
// nao é mais necessario aplicar a importaçao do react 
// import React from 'react' 

import './App.css'
import TempleteExpression from './Components/TempleteExpression'
import FirstComponent from './Components/FirstComponent'
import Eventos from './Components/Eventos'


function App() {
  return (
    <div className='app'> 
      <h1>Fundamentos do React</h1>
      <FirstComponent /> 
      <TempleteExpression />
      <Eventos/>
    
    </div>
  )
}

export default App
