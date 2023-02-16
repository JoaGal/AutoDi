import { SelectHome } from '../types/Home';

export const SelectStatsCard = ({pathObject, handleChange}: SelectHome) => {
    return (
        <>
        <p className='font-semibold md:text-2xl mt-5 md:mt-0 text-xl text-left md:text-center'>
          Atividad
        </p>
        <select value={pathObject} onChange={handleChange} name='activity' id='activity' className='text-lime-500 md:h-10 p-2 rounded-sm bg-stone-50 text-sm md:text-lg outline-none md:mt-0 hover:bg-lime-100'>
          <option value='1.2'>Poco o ningún ejercicio</option>
          <option value='1.375'>Ejercicio ligero (1-3 x semana)</option>
          <option value='1.55'>Ejercicio Moderado (3-5 x semana)</option>
          <option value='1.725'>Ejercicio Fuerte (6 x semana)</option>
          <option value='1.9'>Ejercicio profesional (2 x dia)</option>
        </select>
        </>
    )
}
