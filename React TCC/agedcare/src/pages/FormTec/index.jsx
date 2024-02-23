import React from 'react'
import styles from './formTec.module.css'

import Header from '../../components/Header'
import FormTec from '../../components/pageFormTec/FormTec';

import { FaUser } from "react-icons/fa";
import { MdOutlineOtherHouses } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PiPaperPlaneTiltBold } from "react-icons/pi";


const index = () => {
  return (
    <>
    <Header/>
    <div className={styles.app}>
        <h3 className={styles.title}>Mande suas informações para nós o(a) avaliar!</h3>
       <div className={styles.formContainer}>
        <div className={styles.iconContainer}>

            <div className={styles.icon}><FaUser /></div>
            <hr className={styles.divisao}/>

            <div className={styles.icon}><MdOutlineOtherHouses /></div>
            <hr className={styles.divisao}/>

            <div className={styles.icon}><FiCalendar /></div>
            <hr className={styles.divisao}/>

            <div className={styles.icon}><IoCloudDownloadOutline /></div>
            <hr className={styles.divisao}/>

            <div className={styles.icon}><PiPaperPlaneTiltBold /></div>

        </div>
        <FormTec/>
        
       </div>
    </div>
    </>
  )
}

export default index