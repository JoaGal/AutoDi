import { ResultCardsDiet } from '@/app/types/Diet';
import React from 'react';

export const StatsCardDiet = ({
  clientInfo,
  handleChangeSelect,
  handleDivisor,
  handleChangeInput,
  object,
  divisorCarb,
  finalKcal,
  carb,
  divisorProt,
  prot,
  divisorFat,
  fat
}: ResultCardsDiet) => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className=" md:p-10 text-center p-5 mt-10 text-stone-50 bg-lime-500 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
        <h1 className="text-4xl font-bold">Crea tu dieta</h1>
        <select
          className="shadow-lg drop-shadow-lg text-lime-500 md:h-10 p-2 rounded-sm bg-stone-50 text-sm md:text-lg outline-none hover:bg-lime-100 mt-12"
          value={object}
          onChange={handleChangeSelect}
          name="selectObject"
          id="selectObject"
        >
          <option value="0">Selecciona Objetivo</option>
          <option value="0">Mantener peso</option>
          <option value="-350">Disminuir peso</option>
          <option value="350">Aumentar peso</option>
        </select>
        <h2 className="text-xl md:text-2xl font-bold text-center mt-5 tracking-widest">
          Tus calorias a consumir:{' '}
          {clientInfo !== null ? Number(clientInfo.kcal).toFixed(0) : '---'} +{' '}
          <input
            className="w-24 shadow-lg drop-shadow-lg md:h-10 text-xl md:text-2xl rounded-sm text-lime-500 bg-stone-50 p-2 text-center outline-none hover:bg-lime-100 focus:bg-lime-100"
            value={object}
            name="kcalAdd"
            id="kcalAdd"
            type="number"
            onChange={handleChangeInput}
          />
        </h2>
        <p className="shadow-lg drop-shadow-lg text-xl p-2 rounded-lg bg-stone-50 text-lime-500 md:text-2xl font-bold text-center mt-5 tracking-widest">
          {Number(finalKcal).toFixed(0)} kcal
        </p>
        <div className="shadow-lg drop-shadow-lg flex flex-col p-5 bg-stone-50 text-lime-500 rounded-lg items-center mt-7">
          <span className="text-xl md:text-2xl font-bold">
            Carbohidratos x{' '}
            <input
              className="text-center w-12 shadow-lg drop-shadow-lg md:h-10 p-2 rounded-sm bg-stone-50 text-sm md:text-lg outline-none hover:bg-lime-100"
              type="number"
              name="divisorCarb"
              id="divisorCarb"
              value={divisorCarb}
              onChange={handleDivisor}
            />
          </span>
          <span className="text-xl md:text-2xl font-bold">{Number(carb).toFixed(0)} gr</span>
          <span className="text-xl md:text-2xl font-bold">
            Proteinas x{' '}
            <input
              className="text-center w-12 shadow-lg drop-shadow-lg md:h-10 p-2 rounded-sm bg-stone-50 text-lg md:text-xl outline-none hover:bg-lime-100 mt-6"
              type="number"
              name="divisorProt"
              id="divisorProt"
              value={divisorProt}
              onChange={handleDivisor}
            />
          </span>
          <span className="text-xl md:text-2xl font-bold">{Number(prot).toFixed(0)} gr</span>
          <span className="text-xl md:text-2xl font-bold">
            Grasas x{' '}
            <input
              className="text-center w-12 shadow-lg drop-shadow-lg md:h-10 p-2 rounded-sm bg-stone-50 text-sm md:text-lg outline-none hover:bg-lime-100 mt-6"
              type="number"
              name="divisorFat"
              id="divisorFat"
              value={divisorFat}
              onChange={handleDivisor}
            />
          </span>
          <span className="text-xl md:text-2xl  font-bold">{Number(fat).toFixed(0)} gr</span>
        </div>
      </div>
    </div>
  );
};
