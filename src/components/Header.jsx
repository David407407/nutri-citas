import React from 'react'

const Header = () => {
  return (
    <div className='p-3'>
        <h1 className='text-6xl font-bold text-lime-400 text-center mb-10'>Consigue tu Propósito</h1>
        <div className="w-56 grid grid-cols-2 m-auto gap-10">
            <img src="/src/img/2.png" alt="Manzana sonriendo" />
            <img src="/src/img/3.png" alt="Manzana sonriendo" />
        </div>
    </div>
  )
}

export default Header