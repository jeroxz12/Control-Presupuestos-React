import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <label htmlFor="filtro">Filtrar Gastos:</label>
            <select name="filtro" id="filtro" value={filtro} onChange={e => setFiltro(e.target.value)}>
            <option value="">---Todas las Categorías---</option>
            <option value="comida">Comida</option>
            <option value="ahorro">Ahorros</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos</option>
            </select>
        </form>
    </div>
  )
}

export default Filtros