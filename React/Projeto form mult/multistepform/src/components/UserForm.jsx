import React from 'react'
import './UserForm.css'
const UserForm = ({data, updateData}) => {
  return (
    <>
        <label>
            <p>Nome</p>
            <input type="text" placeholder="Digite seu nome" required value={data.name || ""} onChange={(e)=>updateData("name",e.target.value)}/>
        </label>
        <label>
            <p>Email</p>
            <input type="email" placeholder="Digite seu email" required value={data.email || ""} onChange={(e)=>updateData("email",e.target.value)}/>
        </label>
    </>
  )
}

export default UserForm