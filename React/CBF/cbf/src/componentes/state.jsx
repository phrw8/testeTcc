import React,{useState} from 'react'

const State = () => {
    const [num,setNum]=useState(10)

    const num100=()=>{
       setNum(100)
    }
    let n1=10

    const n100=()=>{
       n1 =100
    }




  return (
    <div>
        <p>Valor do variavel n1 {n1} </p>
        <button onClick={()=>(n100())}>100</button>
        <p>Valor do state num {num} </p>
        <button onClick={()=>(num100())}>100</button>
    </div>
  )
}

export default State