import { useState } from "react"

const Data = () => {

    // nesse caso o setname é basicamente uma funcao 
    const [name,setName]=useState("Paulo")

  return (
    <div>
        <div>
            <p>Nome {name}</p>
            <button onClick={()=>(setName("Joao"))}>Mudar Variavel</button>
        </div>
    </div>
  )
}

export default Data