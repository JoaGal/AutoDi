'use client';
import { useState } from 'react';
export const ButttonHome = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {show && (
        <div className="hola z-30 absolute overflow-y-scroll bottom-16 md:bottom-32 md:left-32 left-20  w-48 md:w-96 h-64 md:h-96 p-2 md:p-10 bg-stone-50 shadow-lg rounded-bl-none rounded-2xl drop-shadow-lg animate__animated animate__bounceIn">
          <p className="font-bold text-xs md:text-base">
            Aqui descubrirás cuántas calorías debes consumir a diario, si tu peso y composición
            corporal son saludables. Nuestra calculadora nutricional gratis te dirá cuál es tu
            índice de masa corporal (IMC) y tu porcentaje de grasa corporal. Vas a poder tener tu
            propio plan alimenticio personalizado, con el que podrás perder peso o ganar músculo.
            Además, te daremos consejos para que puedas llevar una vida saludable. Uno de nuestros
            objetivos es que tardes lo menos posible en armar y preparar tu dieta. Ya sea de la mano
            de un nutricionista o por tu cuenta, te ayudaremos a que puedas llevarla a cabo. Vas a
            poder modificar los valores que quieras y ver cómo afectan a tu dieta. También vas a
            poder guardar tus recetas favoritas y crear tu propia lista de la compra. ¡Todo esto y
            mucho más gratis en AutoDi!
          </p>
        </div>
      )}
      <button
        className="text-1xl md:text-3xl font-bold text-lime-500 font-black cursor-pointer z-30 absolute md:bottom-20 bottom-10 md:left-20 left-10"
        onClick={() => setShow(!show)}
      >
        Quienes somos?
      </button>
    </>
  );
};
