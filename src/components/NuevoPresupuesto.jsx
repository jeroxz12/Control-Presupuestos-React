import React from 'react'
import { useState } from 'react';

import  Mensaje  from '../components/Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
const [mensaje, setMensaje] = useState( '' );

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if ( isNaN( presupuesto ) || presupuesto <= 0  ){
      setMensaje( "Debes ingresar un numero valido" );
      return;
    }
    setMensaje('');
    setIsValidPresupuesto( true );

  }

  return (
    <div className='contenedor-presupuesto sombra contenedor'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input type="text" className='nuevo-presupuesto' value={presupuesto} placeholder='Añade tu presupuesto' onChange={(e) => {
                  setPresupuesto(Number(e.target.value))
                }}/>
            </div>
            <input type="submit" value="Añadir presupuesto" />

            { mensaje && <Mensaje tipo = "error">{mensaje}</Mensaje> }
        </form>
    </div>
  )
}

export default NuevoPresupuesto