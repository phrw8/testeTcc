import React, { useState } from 'react'
import styles from './tecData.module.css'
import { NormalInput } from './inputs/NormalInput'

export const TecData = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [stateRg, setStateRg] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [sexo, setSexo] = useState("")
  const [civilState, setCivilState] = useState("")

  // const handleDados = (dado, valor) => {
  //   switch (dado) {
  //     case 'name':
  //       setName(valor);
  //       break;
  //     case 'password':
  //       setPassword(valor);
  //       break;
  //     case 'email':
  //       setEmail(valor);
  //       break;
  //     case 'tecnico':
  //       setTecnico(valor);
  //       break;
  //     case 'date':
  //       setDate(valor);
  //       break;
  //     case 'cpf':
  //       setCpf(valor);
  //       break;
  //     case 'rg':
  //       setRg(valor);
  //       break;
  //     case 'stateRg':
  //       setStateRg(valor);
  //       break;
  //     case 'number':
  //       setNumber(valor);
  //       break;
  //     case 'email':
  //       setEmail(valor);
  //       break;
  //     default:
  //       console.error("Estado inválido");

  //   }
  //   console.log(valor)
  // }

  return (
    <>
      {/* <div className={styles.content}>
        <div className={styles.row1}>
          <label className={`${styles.inpGroup} ${styles.name}`}>
            <input type="text" required className={name ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={name} onChange={(e) => handleDados("name", e.target.value)} />
            <label className={styles.placeholder}>Nome completo</label>
          </label>
          <label className={`${styles.inpGroup} ${styles.date}`}>
            <input type="date" required className={styles.dateInput} value={date} onChange={(e) => handleDados("date", e.target.value)} />
            <label className={styles.placeholderDate}>Data de Nascimento</label>
          </label>
        </div>
        <div className={styles.row2}>
          <label className={`${styles.inpGroup} ${styles.normalRow2}`}>
            <input type="number" required className={cpf ? `${styles.input} ${styles.hasValue}` : styles.input} value={cpf} onChange={(e) => handleDados("cpf", e.target.value)} />
            <label className={styles.placeholder}>CPF</label>
          </label>
          <label className={`${styles.inpGroup} ${styles.smallerRow2}`}>
            <input type="text" required className={stateRg ? `${styles.input} ${styles.hasValue}` : styles.input} value={stateRg} onChange={(e) => handleDados("stateRg", e.target.value)} />
            <label className={styles.placeholder}>Orgão emissor</label>
          </label>
          <label className={`${styles.inpGroup} ${styles.normalRow2}`}>
            <input type="number" required className={rg ? `${styles.input} ${styles.hasValue}` : styles.input} value={rg} onChange={(e) => handleDados("rg", e.target.value)} />
            <label className={styles.placeholder}>RG</label>
          </label>

        </div>
        <div className={styles.row3}>
          <label className={styles.inpGroupRow3}>
            <input type="number" required className={number ? `${styles.input} ${styles.hasValue}` : styles.input} value={number} onChange={(e) => handleDados("number", e.target.value)} />
            <label className={styles.placeholder}>Celular</label>
          </label>
          <label className={styles.inpGroupRow3}>
            <input type="email" className={email ? `${styles.input} ${styles.hasValue}` : styles.input} value={email} onChange={(e) => handleDados("email", e.target.value)} />
            <label className={styles.placeholder}>Email</label>
          </label>
        </div>s
      </div> */}  
      
      <div className={styles.content}>
      <label className={styles.title}>Dados pessoais</label>
        <div className={styles.row1}>
          <NormalInput value={name} label="Nome Completo" onChange={setName} dado="name" />
          <NormalInput value={date} label="Data de Nascimento" onChange={setDate} type="date" dado="date" />
        </div>
        <div className={styles.row2}>
          <NormalInput value={cpf} label="CPF" onChange={setCpf} dado="cpf" />
          <NormalInput value={stateRg} label="Orgão emissor" onChange={setStateRg} dado="stateRg" />
          <NormalInput value={rg} label="RG" onChange={setRg} dado="rg" />

        </div>
        <div className={styles.row3}>
          <NormalInput value={number} label="Celular" onChange={setNumber} dado="number" />
          <NormalInput value={email} label="Email" onChange={setEmail} dado="email" />
        </div>
        <div className={styles.row3}>
        <label className={styles.selectInp}>
            <label className={styles.placeholder}>Sexo</label>
          <select value={sexo} onChange={(e)=>setSexo(e.target.value)} required>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
          </select>
          </label>
          <label className={styles.selectInp}>
            <label className={styles.placeholder}>Estado Civil</label>
          <select value={civilState} onChange={(e)=>setCivilState(e.target.value)} required>
            <option value="uniaoEstavel">União Estável</option>
            <option value="solteiro">Solteiro</option>
            <option value="outros">Outros</option>
          </select>
          </label>
          {/* <NormalInput value={civilState} label="Estado Civil" onChange={setCivilState} dado="civilState" /> */}
        </div>
      </div>
    </>
  )
}
