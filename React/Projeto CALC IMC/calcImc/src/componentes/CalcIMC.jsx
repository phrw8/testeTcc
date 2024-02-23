import React, { useState, useEffect  } from 'react'

import classe from "./CalcIMC.module.css"
import Buttons from './Buttons'

const CalcIMC = ( {calculadora}) => {

    const [peso,setPeso]=useState()
    const [altura,setAltura]=useState()
    
    const validDigit=(text)=>{
      return text.replace(/[^0-9,]/g,"")
  }

    const handleHeightChange=(e)=>{
      const updateValue=validDigit(e.target.value)
      setAltura(updateValue)
  }
  const handleWeightChange=(e)=>{
    const updateValue=validDigit(e.target.value)
    setPeso(updateValue)
}
const clearValues=(e)=>{
  e.preventDefault()
  setAltura("")
  setPeso("")
  console.log("processando")

}

  return (
    <div className={classe.main}>
        <h2 className={classe.title}>Calculadora de IMC</h2>
    <form className={classe.form} >
        <div>
            <label className={classe.label}>Altura(cm)</label>
            <input type="text" placeholder='Exemplo 175' className={classe.input} onChange={(e)=>handleHeightChange(e)} value={altura}/>
        </div>
        <div>
            <label className={classe.label}>Peso(kg)</label>
            <input type="text" placeholder='Exemplo 80' className={classe.input} onChange={(e)=>handleWeightChange(e)} value={peso}/>
        </div>
        <div>
        <Buttons name="Enviar" action={(e)=>{
          calculadora(e,altura,peso)
          clearValues(e)
          }} id="submitBtn"/>
        <Buttons name="Limpar" action={clearValues} id="clearBtn"/>
        {/* <input type="submit" className={classe.submitBtn} />
        <input type="submit" className={classe.clearBtn} value="Limpar" onSubmit={(e)=>clearValues(e)}/>  */}
        {/* onClick={()=>{setAltura(""), setPeso("")}} */}
        </div>
        
    </form>


    </div>
  )
}

export default CalcIMC