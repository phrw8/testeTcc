import { useState } from 'react'
import './App.css'
import CalcIMC from './componentes/calcIMC'
import Result from './componentes/Result'

function App() {

  const [imc,setImc]=useState()


  const calculadora=(e,altura,peso)=>{
    e.preventDefault()

    if(!altura || !peso)return

    const resultado = peso/((altura/100)*(altura/100))

    const roundedImc = parseFloat(resultado).toFixed(2);

    setImc(roundedImc)

    console.log(roundedImc)
  }
  const resetCalc=(e)=>{
    e.preventDefault();
    setImc("")
    console.log("executando")
  }
  const obterClassificacaoEClasse = (imc) => {
    let classificacao = '';
    let classeCss = '';
  
    if (imc < 18.5 && imc>0.1) {
      classificacao = "Magreza";
      classeCss = "low";
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = "Normal";
      classeCss = "good";
    } else if (imc >= 25 && imc < 30) {
      classificacao = "Sobrepeso";
      classeCss = "medium";
    } else if (imc >= 30 && imc < 40) {
      classificacao = "Obesidade";
      classeCss = "high";
    } else if (imc > 40){
      classificacao = "Obesidade extrema";
      classeCss = "hiperHigh";
    }
  
    return { classificacao, classeCss };
  };


  return (
    <>
       {!imc ? <CalcIMC  calculadora={calculadora} /> :  <Result imc={imc} resetCalc={resetCalc} obterClassificacaoEClasse={obterClassificacaoEClasse}/>}
       {/* <CalcIMC  calculadora={calculadora} handleToggleImc={handleToggleImc}/>
       <Result imc={imc} resetCalc={resetCalc} obterClassificacaoEClasse={obterClassificacaoEClasse} handleToggleImc={handleToggleImc}/> */}
    </>
  )
}

export default App
  