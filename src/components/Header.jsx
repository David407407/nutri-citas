import React from 'react'

const Header = () => {
  return (
    <div className='p-3'>
        <div className="grid lg:grid-cols-3 m-auto gap-2 md:gap-5 justify-center items-center">
            <img className='w-20 md:w-28 m-auto' src="/src/img/2.png" alt="Manzana sonriendo" />
            <h1 className='md:text-2xl lg:text-4xl font-bold text-lime-400 text-center mt-2 mb-2 md:mt-0 md:mb-10'>Consigue tu Propósito</h1>
            <img className='w-20 md:w-28 m-auto' src="/src/img/3.png" alt="Manzana sonriendo" />
        </div>
    </div>
  )
}

export default Header