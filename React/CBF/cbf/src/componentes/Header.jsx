import React from 'react'

import Night from "../assets/city.jpg"
const Header = () => {
  return (
    <header>
            {/* imagem pelo public */}
            <img src="/img1.jpg" alt="Imaagem" />

            <img src={Night} alt="" />
    </header>
  )
}

export default Header