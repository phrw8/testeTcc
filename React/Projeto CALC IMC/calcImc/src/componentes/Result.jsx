import React from 'react'
import classe from "./Result.module.css"
import Buttons from './Buttons'
import Tabela from './Tabela'

const Result = ({imc,resetCalc,obterClassificacaoEClasse}) => {
  const { classificacao, classeCss } = obterClassificacaoEClasse(imc);
  
  return (
    <div className={classe.resultContainer}>
        <h2 className={classe.infoTitle}>Seu IMC: <span className={classe[classeCss]}>{imc}</span></h2>
        <h3 className={classe.infoClass}>Situaçao atual: <span className={classe[classeCss]}>{classificacao}</span></h3>
        <Tabela/>
        <Buttons id="btnVoltar" name="Voltar" action={(e)=>{resetCalc(e);}}/>
        
        
    </div>
  )
}

export default Result