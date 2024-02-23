import React from 'react'

const Render = () => {

    const hora=new Date().getHours()
    const cumprimento=()=>{
        if(hora>=0 && hora <13){
            return <p>Bom dia</p>
        } if(hora>=13 && hora <18){
            return <p>Boa Tarde</p>
        } else{
            return <p>Boa Noite</p>
        }

    }
  return (
    <div>
        {cumprimento()}
    </div>
  )
}

export default Render