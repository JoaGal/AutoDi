'use client';
import { useState } from 'react';
import { StatsCardDiet } from '../components/dietComponents/StatsCardDiet';
import { ResultFinal } from '../types/Diet';

// type LunchDinner = {
//   meet: number;
//   potato: number;
// };

export default function diet() {
  const [finalObject, setFinalObject] = useState<ResultFinal>({
    finalKcal: 0,
    object: '',
    carb: 0,
    prot: 0,
    fat: 0,
    divisorCarb: 0.58,
    divisorProt: 0.2,
    divisorFat: 0.22
  });
  
  // const [lunchDinner, setLunchDinner] = useState<LunchDinner>({
  //   meet: 0,
  //   potato: 0
  // });

  const item: string | null = localStorage.getItem('clientInfo');
  const clientInfo = JSON.parse(item!);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    //Stats
    const addkcal: number = clientInfo.kcal + Number(e.target.value);
    const finalCarb: number = (addkcal * finalObject?.divisorCarb) / 4;
    const finalprot: number = (addkcal * finalObject?.divisorProt) / 4;
    const finalFat: number = (addkcal * finalObject?.divisorFat) / 9;
    setFinalObject({
      ...finalObject,
      object: e.target.value,
      finalKcal: addkcal,
      carb: finalCarb,
      prot: finalprot,
      fat: finalFat
    });
    //Lunch and dinner
    
    // const prot: number = ((finalprot - 120.9) / 2) / 0.2309;
    // const carb: number = ((finalCarb - 466.9) / 2) / 0.2;
    // setLunchDinner({
    //   ...finalObject,
    //   meet: prot,
    //   potato: carb
    // });
  };

  const handleDivisor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinalObject({
      ...finalObject,
      [e.target.name]: e.target.value && parseFloat(e.target.value)
    });
  };

  return (
    <>
      <div className="bg-[url(./assets/wave.svg)] bg-no-repeat bg-cover bg-bottom md:h-60 h-20 w-full" />
      <StatsCardDiet
        object={finalObject?.object}
        divisorCarb={finalObject?.divisorCarb}
        finalKcal={finalObject?.finalKcal}
        carb={finalObject?.carb}
        divisorProt={finalObject?.divisorProt}
        prot={finalObject?.prot}
        divisorFat={finalObject?.divisorFat}
        fat={finalObject?.fat}
        clientInfo={clientInfo}
        handleChangeSelect={handleChange}
        handleDivisor={handleDivisor}
        handleChangeInput={handleChange}
      />
      {/* <div className="mt-10 md:m-4 flex-col flex justify-center items-center  animate__animated animate__bounceInDown">
        <div className="bg-lime-500 text-stone-50 p-4 rounded-lg md:ml-10 m-2">
          <table className="table-auto text-center border-4 border-stone-50">
            <thead className="md:text-2xl text-xl">
              <tr>
                <th className="border-b-4 border-stone-50 p-2">Menu</th>
                <th className="border-b-4 border-stone-50 p-2">Alimentos/Gramos</th>
              </tr>
            </thead>
            <tbody className="md:text-lg text-sm">
              <tr>
                <td className="border-r-4 border-stone-50 p-2 md:p-4">
                  Omelet de arina de garbanzo con tomate, queso y pan integral. Mas una fruta o dos.
                </td>
                <td>
                  1 huevo entero y dos claras - Harina de garbanzos - 4 Rodajas de pan Integral - 1
                  Tomate - Queso 30gr - 1 Fruta
                </td>
              </tr>
              {(Number(finalObject?.object) > 0 || finalObject?.object === '') && ()  }
                <tr>
                  <td className="border-r-4 border-stone-50 p-2 md:p-4">
                    Scup de aumentador de peso, banana y frutos secos.
                  </td>
                  <td>Mutant Mass - Leche 300ml - 200gr banana - 30gr de nueces y almendras</td>
                </tr>

              <tr>
                <td className="border-r-4 border-stone-50 p-2 md:p-4">
                  Pollo con zanahoria y papa hervida. Mas una fruta.
                </td>
                <td>
                  {lunchDinner?.meet.toFixed(0)}g Carne - {lunchDinner?.potato.toFixed(0)}g Papa - 1 - 50g Zanahoria - 1
                  Fruta
                </td>
              </tr>
              <tr>
                <td className="border-r-4 border-stone-50 p-2 md:p-4">
                  Panqueque de arina integral con mermelada.
                </td>
                <td>
                  100gr Avena / 110gr Harina integral - 1 Huevo entero y 1 clara - 15gr Casancrem -
                  100ml Mermelada - 1 Fruta
                </td>
              </tr>
              <tr>
                <td className="border-r-4 border-stone-50 p-2 md:p-4">
                  Sandwich con carne, lechuga, tomate, y papa hervida.
                </td>
                <td>
                  {lunchDinner?.meet.toFixed(0)}g Carne - {lunchDinner?.potato.toFixed(0)}g Papa - 4
                  Rodajas de pan integral - 1 Fruta
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
}
