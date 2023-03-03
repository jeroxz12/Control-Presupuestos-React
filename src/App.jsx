import { useState } from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'

import { generarId } from './helpers'

import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] =  useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);
  

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  } 


  const handleNuevoGasto = ( ) => {

    setModal(true);

      setTimeout(() => {
  
        setAnimarModal( true );
      }, 500);

  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto} />

      { isValidPresupuesto && (
      
      <>
          <main>
            <ListadoGastos 
              gastos = { gastos }
            ></ListadoGastos>
          </main>
          
          <div className="nuevo-gasto" >
            <img src={IconoNuevoGasto} alt="icono de un nuevo gasto" onClick={ handleNuevoGasto}/>
          </div>
      
      </>) }

      { modal && <Modal 
      setModal = { setModal }
      animarModal = {animarModal}
      setAnimarModal = { setAnimarModal }
      guardarGasto = { guardarGasto }
      />}
    </div>


  )
}

export default App
