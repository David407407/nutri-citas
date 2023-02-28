import {useState, useEffect} from 'react'
import Servicios from './Servicios'

const PlanNutricional = ( {servicios, setServicios} ) => {

  const [plan, setPlan] = useState('')
  useEffect( () => {
    const planObj = {...servicios, plan}
    setServicios(planObj)
  }, [plan] )


  const diseño = "text-center bg-cyan-400 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-cyan-600"
  const diseñoEspecial = "m-auto grid text-center bg-cyan-400 mt-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-cyan-600"
  const diseñoActualEspecial = "m-auto grid text-center bg-cyan-600 mt-3 p-3 rounded-lg cursor-pointer transition-all duration-300"
  const diseñoActual = "text-center bg-cyan-600 p-3 rounded-lg cursor-pointer transition-all duration-300"

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div 
          className={
            plan === 'Definicion' ? `${diseñoActual}` : diseño 
        }
        onClick={ () => setPlan('Definicion') }
        >
          <h2 className="font-semibold text-lg">Plan de Definición</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div 
          className={
            plan === 'Volumen' ? `${diseñoActual}` : diseño 
        }
        onClick={ () => setPlan('Volumen') }
        >
          <h2 className="font-semibold text-lg">Plan de Volumen</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div 
          className={
            plan === 'Definicion y Volumen' ? `${diseñoActualEspecial}` : diseñoEspecial 
        }
        onClick={ () => setPlan('Definicion y Volumen') }
        >
        <h2 className="font-semibold text-lg">Plan de Definición y Volumen</h2>
        <p className="w-3/4 m-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default PlanNutricional