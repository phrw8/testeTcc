import React from 'react'

const ChangeMessage = ({handChange}) => {
    const msg=['ola',"Tudo bem?","Como vai?"]
  return (
    <>
    <button onClick={()=>handChange(msg[0])}>1</button>
    <button onClick={()=>handChange(msg[1])}>2</button>
    <button onClick={()=>handChange(msg[2])}>3</button>
    </>
  )
}

export default ChangeMessage