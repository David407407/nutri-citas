import {useState, useEffect} from 'react'
import Membresia from './Membresia'
import Navegacion from './Navegacion'
import Paginacion from './Paginacion'
import PlanNutricional from './PlanNutricional'
import Resumen from './Resumen'

const Servicios = ({ usuario, setUsuario }) => {

  const [modal, setModal] = useState('1')
  const [servicios, setServicios] = useState({})

  return (
    <div className='text-white'>
        <p className='text-lg mb-2'>Hola {usuario.nombre}</p>

        <Navegacion
          modal={modal}
          setModal={setModal}
        />

        { modal === '1' && <PlanNutricional/> }
        { modal === '2' && <Membresia setUsuario={setUsuario} setServicios={setServicios}/> }
        { modal === '3' && <Resumen/> }

        <Paginacion/>

    </div>
  )
}

export default Servicios