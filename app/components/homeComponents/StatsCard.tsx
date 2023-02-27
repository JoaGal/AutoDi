'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ComponentsStatsCard } from './InputStatsCard';
import boys from '../../assets/boy.svg';
import girls from '../../assets/girl.svg';
import { SelectStatsCard } from './SelectStatsCard';
import { ResultCard } from './ResultCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ClientInfo } from '../../types/Home';
import Link from 'next/link';

export const StatsCard = () => {
  const [boy, setBoy] = useState<boolean>(true);
  const [clientInfo, setClientInfo] = useLocalStorage<ClientInfo>('clientInfo', {
    age: '',
    weight: '',
    waist: '',
    height: '',
    neck: '',
    hip: '',
    activity: '',
    kcal: '',
    imc: '',
    fat: ''
  });
  localStorage.getItem('clientInfo');

  const ResultFinal = () => {
    const { age, weight, height, activity, hip, neck, waist } = clientInfo;
    // Kcal
    const result = 10 * weight + 6.25 * height - 5 * age + (boy ? +5 : -161);
    const resultKcal = result * activity;
    // IMC
    const resultIMC = weight / (height * height);
    // % de grasa
    const resultFat = boy
      ? 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
      : 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) -
        450;
    // setLocalStorage
    setClientInfo({
      ...clientInfo,
      kcal: resultKcal,
      imc: resultIMC,
      fat: resultFat
    });
  };

  const Restart = () => {
    setClientInfo({
      age: '',
      weight: '',
      waist: '',
      height: '',
      neck: '',
      hip: '',
      activity: '',
      kcal: '',
      imc: '',
      fat: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value && parseFloat(e.target.value)
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" md:p-10 text-center p-5 mt-10 text-stone-50 bg-lime-500 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-0">
          Ingresa tus datos
        </h2>
        <div className="flex justify-center items-center mt-10">
          <button
            className={`rounded-full ${
              boy ? 'bg-lime-100' : 'bg-stone-50'
            } w-20 h-20 mr-4 hover:bg-lime-100 shadow-lg drop-shadow-lg`}
            onClick={() => setBoy(true)}
          >
            <Image src={boys} alt="boy" width={65} className="m-auto mt-1" />
          </button>
          <button
            className={`rounded-full ${
              !boy ? 'bg-lime-100' : 'bg-stone-50'
            } w-20 h-20 ml-4 p-auto hover:bg-lime-100 shadow-lg drop-shadow-lg `}
            onClick={() => setBoy(false)}
          >
            <Image src={girls} alt="girl" width={65} className="m-auto mt-1" />
          </button>
        </div>
        <div className="md:flex text-left">
          <div className="md:inline-block md:p-10 md:pt-5">
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
          <div className="inline-block md:p-10 md:pt-5 ">
            <ComponentsStatsCard
              title="Altura"
              extent="cm"
              name="height"
              pathObject={clientInfo?.height}
              handleChange={handleChange}
            />
            <ComponentsStatsCard
              title="Cuello"
              extent="cm"
              name="neck"
              pathObject={clientInfo?.neck}
              handleChange={handleChange}
            />
            {!boy && (
              <ComponentsStatsCard
                title="Cadera"
                extent="cm"
                name="hip"
                pathObject={clientInfo?.hip}
                handleChange={handleChange}
              />
            )}
          </div>
        </div>
        <SelectStatsCard pathObject={clientInfo?.activity} handleChange={handleChange} />
        <ResultCard
          ResultFinal={ResultFinal}
          Restart={Restart} 
          kcal={Number(clientInfo.kcal).toFixed(0)}
          imc={Number(clientInfo.imc).toFixed(2)}
          fat={Number(clientInfo.fat).toFixed(2)}
        />
        <Link href="/diet" className="bg-stone-50 hover:bg-lime-400 text-lime-500 font-bold block p-4 mt-5 md:text-xl rounded-lg shadow-lg drop-shadow-lg">
        Siguiente 
      </Link>
      </div>
    </div>
  );
};
