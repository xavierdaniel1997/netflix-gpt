import React from 'react'
import Logo from "../assets/images/pngwing.com.png"

const Header = () => {
  return (
    <div className='absolute w-48 mx-10 my-4 z-10'>
      <img src={Logo} alt="" />
    </div>
  )
}

export default Header