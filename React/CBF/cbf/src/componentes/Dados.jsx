import React from 'react'

const Dados = (props) => {
const a = 10
const b = 15
  return (
    <section>
        <p>Canal: {props.canal}</p>
        <p>Youtube: {props.youtube}</p>
        <p>Curso:{props.curso}</p>
        <p>Soma de {a} e {b} é igual a {props.somar(a,b)}</p>


    </section>
  )
}

export default Dados