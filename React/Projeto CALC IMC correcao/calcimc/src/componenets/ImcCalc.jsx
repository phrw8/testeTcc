import React,{useState}from 'react'
import "./ImcCalc.css"
import Button from './Button'

const ImcCalc = ( {calcImc}) => {
    const [height,setHeight]=useState("")
    const [weight,setWeight]=useState("")

    const clearForm=(e)=>{
        e.preventDefault()
        setHeight("")
        setWeight("")
    }
    const validDigit=(text)=>{
        return text.replace(/[^0-9,]/g,"")
    }
    const handleHeightChange=(e)=>{
        const updateValue=validDigit(e.target.value)
        setHeight(updateValue)
    }
    const handleWeightChange=(e)=>{
        const updateValue=validDigit(e.target.value)
        setWeight(updateValue)
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura: </label>
                    <input type="text" name='height' id='height' placeholder='Exemplo: 175' onChange={(e)=>handleHeightChange(e)} value={ height}/>
                </div>
            </div>
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="weight">Peos: </label>
                    <input type="text" name='weight' id='weight' placeholder='Exemplo: 70' onChange={(e)=>handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="calcular" action={(e)=>calcImc(e,height,weight)}/>
                <Button id="clear-btn" text="limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc