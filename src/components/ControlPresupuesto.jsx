import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearPresupuesto = (presupuesto)  => {
        return presupuesto.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor contenedor-presupuesto contenedor sombra dos-columnas'>

        <div className="">
            <p>Grafica aqui</p>
        </div>    
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearPresupuesto(presupuesto)}  
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto