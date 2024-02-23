import React from 'react'
import styles from './tecAdress.module.css'
import { NormalInput } from './inputs/NormalInput'

import { useState } from 'react'

export const TecAdress = () => {
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [numHouse, setNumHouse] = useState("")
    const [logradouro, setLogradouro] = useState("")



    return (
        <>
            {/* <div className={styles.content}>
                <div className={styles.row1}>
                    <label className={`${styles.inpGroup} ${styles.logradouro}`}>
                        <input type="text" required className={logradouro ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={logradouro} onChange={(e) => handleDados("logradouro", e.target.value)} />
                        <label className={styles.placeholder}>Logradouro</label>
                    </label>
                    <label className={`${styles.inpGroup} ${styles.endereco}`}>
                        <input type="text" required className={endereco ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={endereco} onChange={(e) => handleDados("endereco", e.target.value)} />
                        <label className={styles.placeholder}>Endereço</label>
                    </label>
                    <label className={`${styles.inpGroup} ${styles.numero}`}>
                        <input type="text" required className={numHouse ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={numHouse} onChange={(e) => handleDados("numHouse", e.target.value)} />
                        <label className={styles.placeholder}>NM</label>
                    </label>
                </div>
                <div className={styles.row2}>
                    <label className={`${styles.inpGroup} ${styles.estado}`}>
                        <input type="text" required className={estado ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={estado} onChange={(e) => handleDados("estado", e.target.value)} />
                        <label className={styles.placeholder}>UF</label>
                    </label>
                    <label className={`${styles.inpGroup} ${styles.cidade}`}>
                        <input type="text" required className={cidade ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={cidade} onChange={(e) => handleDados("cidade", e.target.value)} />
                        <label className={styles.placeholder}>Cidade</label>
                    </label>
                    <label className={`${styles.inpGroup} ${styles.bairro}`}>
                        <input type="text" required className={bairro ? `${styles.input} ${styles.hasValue} ` : `${styles.input}`} value={bairro} onChange={(e) => handleDados("numHouse", e.target.value)} />
                        <label className={styles.placeholder}>Bairro</label>
                    </label>
                </div>
            </div> */}
            <div className={styles.content}>
                <label className={styles.title}>Dados de endereço</label>
                <div className={styles.row1}>
                    <NormalInput value={logradouro} onChange={setLogradouro} label="Logradouro" dado="logradouro"/>
                    <NormalInput value={endereco} onChange={setEndereco} label="Endereço" dado="endereco" />
                    <NormalInput value={numHouse} onChange={setNumHouse} label="NM" dado="numHouse" />
                </div>
                <div className={styles.row2}>
                    <NormalInput value={estado} onChange={setEstado} label="UF" dado="estado"/>
                    <NormalInput value={cidade} onChange={setCidade} label="Cidade" dado="cidade" />
                    <NormalInput value={bairro} onChange={setBairro} label="Bairro" dado="bairro"/>
                </div>
            </div>
        </>
    )
}
