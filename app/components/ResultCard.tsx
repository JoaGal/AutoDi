import { ResultCards } from '../types/Home';

export const ResultCard = ({ ResultFinal, kcal, imc, fat }: ResultCards) => {
  return (
    <div className=" text-center mt-10 text-lime-500 bg-stone-50 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown">
      <button
        onClick={ResultFinal}
        className="text-xl md:text-2xl m-10 font-bold text-center shadow-lg drop-shadow-lg bg-lime-500 text-stone-50 rounded-lg p-2"
      >
        Ver Resultados
      </button>
      <div className="flex flex-col md:flex-row justify-center pb-4">
        <div className="flex flex-col m-2">
          <span className="font-bold">KCAL RECOMENDADAS</span>
          <span className="text-2xl font-black">{kcal}</span>
        </div>
        <div className="flex flex-col m-2">
          <span className="font-bold">ÍNDICE DE MASA CORPORAL</span>
          <span className="text-2xl font-black">{imc}</span>
        </div>
        <div className="flex flex-col m-2">
          <span className="font-bold">% DE GRASA ESTIMADO</span>
          <span className="text-2xl font-black">{fat}</span>
        </div>
      </div>
    </div>
  );
};
