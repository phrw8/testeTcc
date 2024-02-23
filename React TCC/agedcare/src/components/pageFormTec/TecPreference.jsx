import React from 'react'
import styles from './tecPreferences.module.css'
import { Checkbox } from './inputs/Checkbox'
import { NormalInput } from './inputs/NormalInput'

export const TecPreference = () => {
  return (
    <>
      <div className={styles.content}>
      <label className={styles.title}>Preferências</label>
        <div className={styles.inpGroup}>
          <label className={styles.titleLabel}>Qual sua disponibilidade? </label>
          <div className={styles.inputCheckGroup}>
            <Checkbox label="Manhã" />
            <Checkbox label="Tarde" />
            <Checkbox label="Noite" />
            <Checkbox label="Pernoite" />
            <Checkbox label="Fim de semana" dado="fds" />
          </div>
        </div>
        <div className={styles.inpGroup}>
          <label className={styles.titleLabel}>Quais locais você possui apdidão para trabalhar? </label>
          <div className={styles.inputCheckGroup}>
            <Checkbox label="Domícilio" />
            <Checkbox label="Hospital" />
            <Checkbox label="Clínica" />
            <Checkbox label="Asilos" />
          </div>
        </div>
        <div className={`${styles.inpGroup}`}>
          <label className={styles.titleLabel}>Até quantos km de distância do seu endereço você pretende atuar? </label>
          <div className={`${styles.inputCheckGroup } ${styles.groupKm}`}>
            <label className={styles.kmGroup}>
              <input type="number" className={styles.inputKm} />
              <label className={styles.labelKm}>Km</label>
            </label>
          </div>
        </div>
      </div>

    </>
  )
}