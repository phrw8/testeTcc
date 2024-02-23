import React from 'react'

const List = () => {
    const carros=["Celta","Monza","Z4","Gol",]
    const carrosList=carros.map((e)=><li>{e}</li>)
  return (
    <div>
        <ul>
            {carrosList}
        </ul>
    </div>
  )
}

export default List