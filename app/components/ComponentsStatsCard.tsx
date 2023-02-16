import React from 'react';

type Props = {
  title: string;
  extent: string;
  pathObject: number | string ;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const ComponentsStatsCard = (Props: Props) => {

  return (
    <>
      <p className="font-semibold md:text-2xl text-xl mt-5">{Props.title}</p>
      <input value={Props.pathObject} name={Props.name} onChange={Props.handleChange} className=" md:h-10 text-sm md:text-lg rounded-sm text-lime-500 bg-stone-50 p-2 outline-none hover:bg-amber-100 focus:bg-amber-100" />
      <p className="absolute md:ml-56 ml-48 -mt-8">{Props.extent}</p>
    </>
  );
};
