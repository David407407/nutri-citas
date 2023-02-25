
const Navegacion = ( {modal, setModal} ) => {
    const diseño = "cursor-pointer w-1/3 text-center duration-300 transition-all p-1 font-semibold"

  return (
    <div className="flex justify-around bg-red-400 mb-3">
        <a 
            className={
                modal === '1' ? `actual ${diseño}` : diseño 
            }
            onClick={ () => {
                setModal('1')
            } }
        >Plan Nutricional</a>
        <a 
            className={
                modal === '2' ? `actual ${diseño}` : diseño 
            }
            onClick={ () => {
                setModal('2')
            } }
        >Membresia</a>
        <a 
            className={
                modal === '3' ? `actual ${diseño}` : diseño 
            }
            onClick={ () => {
                setModal('3')
            } }
        >Resumen</a>
    </div>
  )
}

export default Navegacion