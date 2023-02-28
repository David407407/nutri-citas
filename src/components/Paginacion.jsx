
const Paginacion = ({modal, setModal}) => {
  const diseño = "ml-3 cursor-pointer p-3 rounded-xl bg-red-400 font-semibold"
  const max = 3
  const min = 1
  let paginacion = parseInt(modal)
  return (
    <div className="flex justify-between pt-3">
        
        <a 
          className={ parseInt(modal) > 1 ? diseño : `${diseño} invisible`}
          onClick={ () => {
            if(parseInt(modal) > min ) {
              paginacion -= 1
              setModal(paginacion.toString())
            }
          } }
        >Atras</a>
        
        <a 
          className={ parseInt(modal) < 3 ? diseño : `${diseño} invisible`}
          onClick={ () => {
            if(parseInt(modal) < max ) {
              paginacion += 1
              setModal(paginacion.toString())
            }
          } }
        >Siguiente</a>
        
    </div>
  )
}

export default Paginacion