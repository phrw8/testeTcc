import { useState } from 'react'
import './App.css'
import ImcCalc from './componenets/ImcCalc'
import { data } from "./data/data";
import ImcTable from "./componenets/ImcTable"


function App() {
  
  const resetCalc=(e)=>{
    e.preventDefault();
    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc,setImc]=useState("")
  const [info,setInfo]=useState("")
  const [infoClass,setInfoClass]=useState("")

  const calcImc=(e,height,weight)=>{
    e.preventDefault()

    if(!weight||!height) return


    console.log(height,weight)
    console.log("Resolvido")

    const imcResult=(weight/(height/100)**2).toFixed(1)

    setImc(imcResult)

    data.forEach((item)=>{
      if(imcResult >= item.min && imcResult <=item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if (!info) return
    

  }
  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>}
    </div>
      
  )
}

export default App
