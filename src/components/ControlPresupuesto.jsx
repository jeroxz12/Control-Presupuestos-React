import {useEffect, useState} from 'react'

const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

   useEffect(() => {
    // Total seria el acumulador y gasto el indice, el 0 es el valor en el que empieza
    const totalGastado = gastos.reduce((total, gasto) =>  Number(gasto.cantidad) + total, 0);

        setGastado(totalGastado);
     
   }, [gastos])
   
    



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
            <p>
                <span>Disponible: </span> {formatearPresupuesto(disponible)}  
            </p>
            <p>
                <span>Gastado: </span> {formatearPresupuesto(gastado)}  
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto