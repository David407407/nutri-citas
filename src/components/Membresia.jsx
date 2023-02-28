import { useState, useEffect } from 'react'

const Membresia = ( {servicios, setServicios } ) => {
    const diseño = "text-center bg-lime-200 hover:bg-lime-300 text-black font-bold rounded-3xl p-4 cursor-pointer transition-all duration-300"
    const diseñoActual = "text-center bg-lime-300 text-black font-bold rounded-3xl p-4 cursor-pointer transition-all duration-300"

    const [membresia, setMembresia] = useState('')

    useEffect( () => {
        const membresiaObj = {...servicios, membresia}
        setServicios(membresiaObj)
    }, [membresia] )

  return (
    <div className="grid md:grid-cols-2 gap-3">
        <div 
            className={
                membresia === 'Cereza' ? `${diseñoActual}` : diseño 
            }
            onClick={ () => setMembresia('Cereza') }
        >
            <h2>Membresia Cereza</h2>
            <img className="w-28 m-auto mt-5" src="/src/img/Cereza.png" alt="" />
        </div>
        <div
            className={
                membresia === 'Fresa' ? `${diseñoActual}` : diseño  
            }
            onClick={ () => setMembresia('Fresa') }
        >
            <h2>Membresia Fresa</h2>
            <img className="w-28 m-auto mt-5" src="/src/img/Fresa.png" alt="" />
        </div>
        <div 
            className={
                membresia === 'Sandia' ? `${diseñoActual}` : diseño 
            }
            onClick={ () => setMembresia('Sandia') }
        >
            <h2>Membresia Sandia</h2>
            <img className="w-28 m-auto mt-5" src="/src/img/Sandia.png" alt="" />
        </div>
        <div 
            className={
                membresia === 'Frambuesa' ? `${diseñoActual}` : diseño 
            }
            onClick={ () => setMembresia('Frambuesa') }
        >
            <h2>Membresia Frambuesa</h2>
            <img className="w-28 m-auto mt-5" src="/src/img/Frambuesa.png" alt="" />
        </div>
    </div>
  )
}

export default Membresia