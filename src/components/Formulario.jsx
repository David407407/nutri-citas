import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ( {setUsuario} ) => {

  const [nombre, setNombre ] = useState('');
  const [email, setEmail ] = useState('');
  const [cita, setCita ] = useState('');
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if( [ nombre, email, cita ].includes('') ) {
      setError(true)
      return
    }

    setError(false)

    const usuarioObj = {
      nombre,
      email,
      cita
    }

    setUsuario(usuarioObj)
  }

  return (
    <div className="mt-5">
        <h2 className="font-black text-3xl text-center text-white mb-3">Registra tus Datos</h2>

        <form
          onSubmit={ handleSubmit } 
          className="bg-teal-100 shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error === true && <Error> <p>Todos los campos son obligatorios</p> </Error> }
          <div className="mb-5">
            <label className="block text-black uppercase font-bold" htmlFor="nombre">Nombre</label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              id="nombre"
              placeholder="Escribe tu Nombre"
              value={nombre}
              onChange = { (e) => setNombre(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label className="block text-black uppercase font-bold" htmlFor="email">Email</label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              id="email"
              placeholder="Escribe tu Email"
              value={email}
              onChange = { (e) => setEmail(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label className="block text-black uppercase font-bold" htmlFor="cita">Día de tu Cita</label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date"
              id="cita"
              value={cita}
              onChange = { (e) => setCita(e.target.value) }
            />
          </div>

          <input 
            type="submit"
            className="bg-red-400 w-full p-3 text-white uppercase font-bold hover:bg-red-500 cursor-pointer transition-all rounded-md"
            value="Agendar Cita"
          />
          
        </form>
    </div>
  )
}

export default Formulario