'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ComponentsStatsCard } from './InputStatsCard';
import boys from '../assets/boy.svg';
import girls from '../assets/girl.svg';
import { SelectStatsCard } from './SelectStatsCard';
import { ResultCard } from './ResultCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ClientInfo } from '../types/Home';

export const StatsCard = () => {
  const [boy, setBoy] = useState<boolean>(false);
  const [clientInfo, setClientInfo] = useLocalStorage<ClientInfo>("clientInfo",{
    age: '',
    weight: '',
    waist: '',
    height: '',
    hip: '',
    chest: '',
    activity: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> 
  ) => {
    setClientInfo ({
      ...clientInfo ,
      [e.target.name]: e.target.value && parseFloat(e.target.value)
    });
  };

  return (
    <div className="flex justify-center items-center pb-32">
      <div className=" md:p-10 text-center p-5 mt-10 text-stone-50 bg-lime-500 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-0">
          Ingresa tus datos
        </h2>
        <div className="flex justify-center items-center mt-10">
          <button
            className="rounded-full bg-stone-50 w-20 h-20 mr-4 hover:bg-lime-100 shadow-lg drop-shadow-lg"
            onClick={() => setBoy(true)}
          >
            <Image src={boys} alt="boy" width={65} className="m-auto mt-1" />
          </button>
          <button
            className="rounded-full bg-stone-50 w-20 h-20 ml-4 p-auto hover:bg-lime-100 shadow-lg drop-shadow-lg"
            onClick={() => setBoy(false)}
          >
            <Image src={girls} alt="girl" width={65} className="m-auto mt-1" />
          </button>
        </div>
        <div className="md:flex text-left">
          <div className="md:inline-block md:p-10">
            <ComponentsStatsCard
              title="Edad"
              extent="años"
              name="age"
              pathObject={clientInfo?.age}
              handleChange={handleChange}
            />
            <ComponentsStatsCard
              title="Peso"
              extent="kg"
              name="weight"
              pathObject={clientInfo?.weight}
              handleChange={handleChange}
            />
            <ComponentsStatsCard
              title="Cintura"
              extent="cm"
              name="waist"
              pathObject={clientInfo?.waist}
              handleChange={handleChange}
            />
          </div>
          <div className="inline-block md:p-10 mr-10 ">
            <ComponentsStatsCard
              title="Altura"
              extent="cm"
              name="height"
              pathObject={clientInfo?.height}
              handleChange={handleChange}
            />
            <ComponentsStatsCard
              title="Cadera"
              extent="cm"
              name="hip"
              pathObject={clientInfo?.hip}
              handleChange={handleChange}
            />
            {!boy && (
              <ComponentsStatsCard
                title="Pecho"
                extent="cm"
                name="chest"
                pathObject={clientInfo?.chest}
                handleChange={handleChange}
              />
            )}
          </div>
        </div>
        <SelectStatsCard pathObject={clientInfo?.activity} handleChange={handleChange} />
        <ResultCard />
      </div>
    </div>
  );
};
