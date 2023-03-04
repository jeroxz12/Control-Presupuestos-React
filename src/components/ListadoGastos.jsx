import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        
        <h2>{gastos.length > 0 ? 
                'Listado de Gastos'
            : 'No tienes ningun gasto, prueba agregando uno.' }</h2>
         {gastos.map( gasto  => 
            <Gasto
                key = { gasto.id}
                gasto = { gasto }
            />
         )}   
    </div>
  )
}

export default ListadoGastos