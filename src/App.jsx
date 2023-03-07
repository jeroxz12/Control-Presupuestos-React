import { useState, useEffect } from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'

import { generarId } from './helpers'

import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import Filtros from './components/Filtros'


function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] =  useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState( localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
  
        setAnimarModal( true );
      }, 500);    } 
  }, [ gastoEditar ])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto])
  
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'));
    
    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true)};
  }, [])

  useEffect( () => {
      if( filtro ){
        const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro );

        setGastosFiltrados(gastosFiltrados);
      }
  }, [filtro])

  const guardarGasto = (gasto) => {
    if(!gasto.id){
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);

    } else {
      const gastosActualizados = gastos.map( (gastoAEditar) => gastoAEditar.id === gasto.id ? gasto : gastoAEditar );
      setGastos(gastosActualizados);
      setGastoEditar({})

    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  } 


  const handleNuevoGasto = ( ) => {
    setGastoEditar({});
    setModal(true);

      setTimeout(() => {
  
        setAnimarModal( true );
      }, 500);

  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter( gasto => gasto.id != id);
    setGastos( gastosActualizados )

  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos = { gastos }
        setGastos = { setGastos }
        />

      { isValidPresupuesto && (
      
      <>
          <main>
            <Filtros
              filtro = { filtro }
              setFiltro = { setFiltro }
            />
            <ListadoGastos 
              gastos = { gastos }
              setGastoEditar = { setGastoEditar }
              eliminarGasto = { eliminarGasto }
              filtro = { filtro }
              gastosFiltrados = { gastosFiltrados }
            ></ListadoGastos>
          </main>
          
          <div className="nuevo-gasto" >
            <img src={IconoNuevoGasto} alt="Icono de un nuevo gasto" onClick={ handleNuevoGasto}/>
          </div>
      
      </>) }

      { modal && <Modal 
      setModal = { setModal }
      animarModal = {animarModal}
      setAnimarModal = { setAnimarModal }
      guardarGasto = { guardarGasto }
      gastoEditar = { gastoEditar }
      setGastoEditar = { setGastoEditar }
      />}
    </div>


  )
}

export default App
