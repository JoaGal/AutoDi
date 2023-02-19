import React from 'react';
import { InputHome } from '../types/Home';

export const ComponentsStatsCard = ({
  title,
  extent,
  pathObject,
  name,
  handleChange
}: InputHome) => {
  return (
    <>
      <p className="font-semibold md:text-2xl text-xl mt-5">{title}</p>
      <input
        value={pathObject}
        name={name}
        id={name}
        type="number"
        onChange={handleChange}
        className="shadow-lg drop-shadow-lg md:h-10 text-sm md:text-lg rounded-sm text-lime-500 bg-stone-50 p-2 outline-none hover:bg-lime-100 focus:bg-lime-100"
      />
      <p className="absolute md:ml-56 ml-48 -mt-8">{extent}</p>
    </>
  );
};
