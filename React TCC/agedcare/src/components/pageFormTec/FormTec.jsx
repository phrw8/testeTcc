import React from 'react'
import { useState } from 'react';
import styles from './formTec.module.css'

import {TecData} from './TecData'
import {TecPreference} from "./TecPreference";
import {TecAdress} from "./TecAdress";
import { TecDocs } from './TecDocs';

import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const FormTec = () => {
    const componentsList = [
        <TecData />,
        <TecAdress/>,
        <TecPreference/>,
        <TecDocs/>

        
    ];
    const [screen, setScreen] = useState(0);

    const handleNextScreen = () => {
        screen < 3 && setScreen(prevScreen => prevScreen + 1);
    };
    const handlePrevScreen = () => {
        screen > 0 && setScreen(prevScreen => prevScreen - 1);
    };
    return (
        <>
        <form className={styles.form}>
            {componentsList[screen]}
                {screen !== 0 ?
                    <button type="button" onClick={handlePrevScreen} className={styles.btnLeft}>
                        <GrFormPrevious />
                        <span>Anterior</span>
                    </button> : null}

                {screen === 3 ?
                    <button type="submit" className={styles.btnRight}>
                        <span>Enviar</span>
                    </button> : null}
                {screen !== 3 ?
                    <button type="button" onClick={handleNextScreen} className={styles.btnRight}>
                        <span>Próximo</span>
                        <GrFormNext />
                    </button> : null
                }
        </form>
        </>
        
    )
}

export default FormTec