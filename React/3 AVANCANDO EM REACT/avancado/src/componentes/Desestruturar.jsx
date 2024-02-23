import React from 'react'

const Desestruturar = ({nome, idade}) => {
    const User=()=>{
        return <p>O nome do usuario é {nome} e sua idade é {idade}!</p>
    }
  return (
    <div>
        {User()}
    </div>
  )
}

export default Desestruturar