'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ComponentsStatsCard } from './ComponentsStatsCard';
import boys from '../assets/boy.svg';
import girls from '../assets/girl.svg';

export const StatsCard = () => {
  const [boy, setBoy] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center pb-32">
      <div className=" md:p-10 text-center p-5 mt-10 text-stone-50 bg-lime-500 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-0">
          Ingresa tus datos
        </h2>
        <div className="flex justify-center items-center mt-10">
          <button
            className="rounded-full bg-stone-50 w-20 h-20 mr-4 hover:bg-amber-100"
            onClick={() => setBoy(true)}
          >
            <Image src={boys} alt="boy" width={65} className="m-auto mt-1" />
          </button>
          <button
            className="rounded-full bg-stone-50 w-20 h-20 ml-4 p-auto hover:bg-amber-100 "
            onClick={() => setBoy(false)}
          >
            <Image src={girls} alt="girl" width={65} className="m-auto mt-1" />
          </button>
        </div>
        <div className="md:flex text-left">
          <div className="md:inline-block md:p-10">
            <ComponentsStatsCard title="Edad" extent="años" />
            <ComponentsStatsCard title="Peso" extent="kg" />
            <ComponentsStatsCard title="Cintura" extent="cm" />
          </div>
          <div className="inline-block md:p-10 mr-10 ">
            <ComponentsStatsCard title="Altura" extent="cm" />
            <ComponentsStatsCard title="Cadera" extent="cm" />
            {!boy && <ComponentsStatsCard title="Pecho" extent="cm" />}
          </div>
        </div>
            <select className='bg-lime-500 border-b-2 text-sm md:text-lg outline-none mt-6 md:mt-0 '>
                <option>Seleccinoar una Opcion</option>
                <option>Poco o ningún ejercicio</option>
                <option>Ejercicio ligero (1-3 x semana)</option>
                <option>Ejercicio Moderado (3-5 x semana)</option>
                <option>Ejercicio Fuerte (6 x semana)</option>
                <option>Ejercicio profesional (2 x dia)</option>
            </select>
      </div>
    </div>
  );
};
