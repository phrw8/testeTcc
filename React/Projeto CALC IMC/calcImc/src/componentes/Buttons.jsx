import React from 'react'
import "./Buttons.css"


const Buttons = ({id,action,name}) => {
    const handleEvent=(e)=>{
        action(e)
    }
  return (
    <button id={id} onClick={(e)=>handleEvent(e)} >{name}</button>
  )
}

export default Buttons