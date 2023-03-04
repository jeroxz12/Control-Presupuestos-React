import React from 'react'

import { formatearFecha } from '../helpers';

import IconoAhorro from '../assets/img/icono_ahorro.svg';
import IconoCasa from '../assets/img/icono_casa.svg';
import IconoComida from '../assets/img/icono_comida.svg';
import IconoSalud from '../assets/img/icono_salud.svg';
import IconoOcio from '../assets/img/icono_ocio.svg';
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg';
import IconoGastos from '../assets/img/icono_gastos.svg';

const diccionarioIconos = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  salud: IconoSalud,
  ocio: IconoOcio,
  suscripciones: IconoSuscripciones,
  gastos: IconoGastos
}



const Gasto = ({ gasto }) => {

  const { nombre, cantidad, categoria, fecha } = gasto;


  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">

          <img src={diccionarioIconos[categoria]} alt={'Icono de ' + categoria} />

        <div className="descripcion-gasto">
          <p className='categoria'>{categoria} </p>
          <p className='nombre-gasto'> {nombre} </p>
          <p className='fecha-gasto'>Agregado el: {' '} <span className='fecha-gasto'>{formatearFecha(fecha)}</span></p>
          
        </div>
      </div>
      <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Gasto