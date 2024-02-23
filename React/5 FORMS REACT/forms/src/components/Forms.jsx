import React, { useState } from 'react'
import classe from "./Forms.module.css"


const Forms = ({userName, userEmail}) => {
    const [nome,setNome]=useState(userName)
    const [email,setEmail]=useState(userEmail)

    const hadleSubmit=(e)=>{
        e.preventDefault()

        console.log(`email: ${email} nome:${nome}`)

        setNome("")
        setEmail("")
    }

  return (
    <>

    <form className={classe.forms} onSubmit={hadleSubmit}>
        <div>
        <label className={classe.label}>Nome</label>
        <input type="text" className={classe.input} placeholder='Digite seu nome' onChange={(e)=>setNome(e.target.value)} value={nome} />
        </div>
        <div>
        <label className={classe.label}>Email</label>
        <input type="email" className={classe.input} placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <p>O seu nome é {nome}</p>
        <p>O seu email é {email}</p>
        <input type="submit" />
        
    </form>
    </>
  )
}

export default Forms