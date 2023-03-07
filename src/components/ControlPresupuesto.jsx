import {useEffect, useState} from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0)

   useEffect(() => {
    // Total seria el acumulador y gasto el indice, el 0 es el valor en el que empieza
    const totalGastado = gastos.reduce((total, gasto) =>  Number(gasto.cantidad) + total, 0);
    setGastado(totalGastado);

    const totalDisponible =  presupuesto - totalGastado;
    setDisponible( totalDisponible );


    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

    setTimeout(() => {
        setPorcentaje( nuevoPorcentaje );
    }, 1000);

   }, [gastos])

    const formatearPresupuesto = (presupuesto)  => {
        return presupuesto.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = ( ) => {
        const resultado = confirm( '¿Estas seguro de que deseas resetear la aplicación?');
        if( resultado ){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false);
        } else {

        }
    }

  return (
    <div className='contenedor contenedor-presupuesto contenedor sombra dos-columnas'>

        <div className="">
            <CircularProgressbar  
                value = { porcentaje }
                styles = { 
                    buildStyles({
                        pathColor: porcentaje > 100  ? '#DC2626': '#3b82f6',
                        trailColor: porcentaje > 100  ? '#DC2626': '#3b82f6'
                    })
                }
                text = {`${porcentaje}% Gastado`}
            />
        </div>    
        <div className="contenido-presupuesto">
                <button className='reset-app' type='button' onClick={handleResetApp}>
                    Resetear App
                </button>

            <p>
                <span>Presupuesto: </span> {formatearPresupuesto(presupuesto)}  
            </p>
            <p className= {`${ disponible < 0 ? 'negativo' : ''}`}>
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