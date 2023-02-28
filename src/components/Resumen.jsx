import {useEffect} from 'react'
import Error from "./Error"

const Resumen = ( {servicios} ) => {
  const {membresia, plan} = servicios
  const mostrarError = () => <Error> <p>Aún no has Seleccionado Nada</p> </Error>

  const alerta = () => {
    Swal.fire(
      'Tu Cita ha sido Guardada!',
      '',
      'success'
    )
    setTimeout(() => {
      location.reload()
    }, 2000);
  }

  return (
    <div className='grid justify-center items-center'>
      { [membresia, plan].includes('') && 
        mostrarError()
      }
      <h1 className='font-bold text-xl mb-2'>Plan: <span className='text-teal-400'>{plan}</span></h1>
      <h1 className='font-bold text-xl mb-2'>Membresia: <span className='text-teal-400'>{membresia}</span></h1>
      <img className='w-28 m-auto' src={`/src/img/${membresia}.png`} alt="" />

      <button 
        className='bg-red-400 rounded-md p-3 mt-6 cursor-pointer hover:bg-red-500 duration-300 transition-all'
        onClick={ () => alerta()}
        >Agendar Plan</button>   
    </div>
  )
}

export default Resumen