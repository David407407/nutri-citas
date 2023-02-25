import React from 'react'

const Header = () => {
  return (
    <div className='p-3'>
        <div className="grid grid-cols-3 m-auto gap-5 justify-center">
            <img className='w-28 m-auto' src="/src/img/2.png" alt="Manzana sonriendo" />
            <h1 className='text-4xl font-bold text-lime-400 text-center mb-10'>Consigue tu Propósito</h1>
            <img className='w-28 m-auto' src="/src/img/3.png" alt="Manzana sonriendo" />
        </div>
    </div>
  )
}

export default Header