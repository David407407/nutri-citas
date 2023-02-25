import {useState, useEffect} from 'react'
import Membresia from './Membresia'
import Navegacion from './Navegacion'
import PlanNutricional from './PlanNutricional'
import Resumen from './Resumen'

const Servicios = ({ usuario }) => {

  const [modal, setModal] = useState('1')

  return (
    <div className='text-white'>
        <p className='text-lg mb-2'>Hola {usuario.nombre}</p>

        <Navegacion
          modal={modal}
          setModal={setModal}
        />

        { modal === '1' && <PlanNutricional/> }
        { modal === '2' && <Membresia/> }
        { modal === '3' && <Resumen/> }

    </div>
  )
}

export default Servicios