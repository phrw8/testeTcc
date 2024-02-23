import React from 'react'
import "./Tabela.css"

const Tabela = () => {
  return (
    <div>
      <h2 className='rankTitle'>Confira as classificações:</h2>
      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Obesidade</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Menor que 18,5</td>
              <td>Magreza</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Entre 18,5 e 24,9</td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Entre 25,0 e 29,9</td>
              <td>Sobrepeso</td>
              <td>I</td>
            </tr>
            <tr>
              <td>Entre 30,0 e 39,9</td>
              <td>Obesidade</td>
              <td>II</td>
            </tr>
            <tr>
              <td>Maior que 40,0</td>
              <td>Obesidade grave</td>
              <td>III</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabela