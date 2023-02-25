import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Servicios from './components/Servicios'

function App() {
  const [usuario, setUsuario] = useState({})

  return (
    <div className='grid grid-cols-3 justify-center items-center h-screen'>
      <h1 className='text-lime-500 text-9xl font-bold text-center'>Nutri</h1>
      <div className="fondo-negro rounded-3xl mt-3 p-6">
        <Header/>
        {Object.entries(usuario).length === 0 
        ? <Formulario
            setUsuario={setUsuario}
          />
        : <Servicios
            usuario={usuario}
          />
        }
        
      </div>
      <h1 className='text-lime-500 text-9xl font-bold text-center'>Citas</h1>
    </div>
  )
}

export default App
