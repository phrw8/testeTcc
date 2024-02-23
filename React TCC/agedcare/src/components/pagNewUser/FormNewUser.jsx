import { useState } from 'react'
import styles from './formNewUser.module.css'

import { Navigate } from 'react-router-dom';

const FormNewUser = () => {

    const [submitted, setSubmitted] = useState(false);

    const url="http://localhost:3000/users"

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [tecnico,setTecnico]=useState(false)

  const handleSubmit= async (e)=>{
    e.preventDefault()

    const user={
      name,
      password,
      email,
      tecnico,
   }
   
   const res= await fetch(url, {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify(user),
   })

   if (res.ok) {
    setSubmitted(true);
}
}

  const handleDados = (dado, valor) => {
    switch (dado) {
      case 'name':
        setName(valor);
        break;
      case 'password':
        setPassword(valor);
        break;
      case 'email':
        setEmail(valor);
        break;
      case 'tecnico':
        setTecnico(valor);
        break;
      default:
        console.error("Estado inválido");


    }
    console.log(dado)
  }



  return (
    <>
    {submitted ? <Navigate to="/Login" /> : null}
        <form className={styles.form} onSubmit={(e)=>{handleSubmit(e)}}>
            <h3>Crie sua conta</h3>
            <label className={styles.inputGroup}>
                <input type="text" required value={name} onChange={(e)=>{handleDados("name",e.target.value)}} className={name ? `${styles.input} ${styles.hasValue}` : styles.input}/>
                <label className={styles.placeholder}>Digite seu nome de usúario</label>
            </label>
            <label className={styles.inputGroup}>
                <input type="email" required value={email} onChange={(e)=>{handleDados("email",e.target.value)}}
                className={email ? `${styles.input} ${styles.hasValue}` : styles.input}/> 
                <label className={styles.placeholder}>Digite seu email</label>
            </label>
            <div className={styles.passwords}>
            <label className={styles.inputGroup}>
                <input type="password" required value={password} onChange={(e)=>{handleDados("password",e.target.value)}} className={password ? `${styles.input} ${styles.hasValue}` : styles.input}/> 
                <label className={styles.placeholder}>Crie uma senha</label>
            </label>
            <label className={styles.inputGroup}>
                <input type="password" disabled/> 
                <label className={styles.placeholder}>Confirme sua senha</label>
            </label>
            </div>
            <label className={styles.radioTec}>
                <label> Cuidador:</label>
                <label>
                    Sim
                    <input type="radio" required name='input' value={tecnico} onClick={(e)=>{handleDados("tecnico",true)}} /> 
                </label>

                <label >
                 Não
                 <input type="radio" name='input' value={tecnico} onClick={(e)=>{handleDados("tecnico",false)}}/> 
                </label>
                
            </label>
            <button type="submit" className={styles.btn}  >Entrar</button>
        </form>
    </>
  )
}

export default FormNewUser