import React from 'react'
import { useState, useEffect } from 'react';

import Mensaje from './Mensaje';

import IconoCerrarModal from '../assets/img/cerrar.svg'
const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

  const [mensaje, setMensaje] = useState('');

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad ] = useState(0)
  const [categoria, setCategoria ] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('');

  useEffect( () => {
    if ( Object.keys( gastoEditar) .length > 0){
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id);
    }
  }, [ ]);

  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los campos son necesarios.');
        setTimeout(() => {
          setMensaje('');
        }, 3000);
        return;
      }

      
      guardarGasto({nombre,cantidad,categoria,id,fecha});
  }

  return (
    <div className='modal'>

      <div className="cerrar-modal">
        <img src={IconoCerrarModal} alt="icono de cerrar modal" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`} onSubmit={handleSubmit} >
      <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        <div className="campo">
          <label htmlFor="nombre">Ingresa el nombre del  gasto:</label>
          <input id='nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Añade el nombre del gasto' />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Ingresa la cantidad:</label>
          <input id='cantidad' type="number" placeholder='Añade la cantidad del gasto ej. 300' value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria:</label>
          <select id="categoria"value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">---Seleccione una Categoría---</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorros</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos</option>
          </select>

        </div>

        { mensaje && <Mensaje 
          tipo = 'error'
        >{mensaje}</Mensaje>}
        <input type="submit" value= { gastoEditar.nombre ? 'Actualizar Gasto' : 'Añadir Gasto'} />
      </form>

    </div>
  )
}

export default Modal