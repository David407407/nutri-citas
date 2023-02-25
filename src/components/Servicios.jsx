import {useState} from 'react'

const Servicios = ({ usuario }) => {
  return (
    <div className='text-white'>
        <p>Hola {usuario.nombre}</p>

    </div>
  )
}

export default Servicios