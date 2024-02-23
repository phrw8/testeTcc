import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [list]=useState(["Paulo","Joao","Murilo"])

    const [objectList,setObjects]=useState([
        {id:1, nome:"Paulo", age:19 },
        {id:2, nome:"Murilo", age:12 },
        {id:3, nome:"Felipe", age:38 }
    ])

    const deleteUsers=()=>{
        const randomNumber=Math.floor(Math.random()*4)

        setObjects((objects)=>(
            objects.filter((users)=>randomNumber !== users.id)
        ))
    }
  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        <ul>
            {objectList.map((item)=>(
                <li key={item.id}>{item.nome}--{item.age}</li>
            ))}
        </ul>
        <button onClick={()=>deleteUsers()}>Roleta russa</button>
    </div>
  )
}

export default ListRender