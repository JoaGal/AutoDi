'use client';
import Image from 'next/image';
import Link from 'next/link';
import leaves from './assets/leaves.svg';
import 'animate.css';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  console.log(show)
  return (
    <main>
      <div className='flex justify-center items-center bg-lime-500 md:h-72 h-10 m1 pt-20 md:pt-0 relative z-30'>
        <h1 className='md:text-8xl text-5xl font-bold no-underline text-stone-50 md:m-10 m-2 animate__animated animate__bounceInDown'>AutoDi</h1>
        <Image src={leaves} alt="leaves" width={80} className='animate__animated animate__bounceInDown ' />
      </div>
      <div className='wave'></div>
      <div className='flex justify-center items-center pt-10 md:pt-0' >
        <Link href="/" className='text-3xl md:text-5xl font-bold text-center text-stone-50 bg-lime-500 p-2 pb-3 md:p-6 md:pb-7 shadow-lg rounded-lg drop-shadow-lg animate__animated animate__bounceInDown z-20'>Comenzar</Link>
      </div>
      {show && 
      <div className='hola z-30 absolute bottom-32 overflow-y-scroll left-32 w-96 h-96 p-10 bg-white shadow-lg rounded-lg drop-shadow-lg animate__animated animate__pulse'>
        <p>
          Aqui descubrirás cuántas calorías debes consumir a diario, si tu peso y composición corporal son saludables. Nuestra calculadora nutricional gratis te dirá cuál es tu índice de masa corporal (IMC), tu porcentaje de grasa corporal y cuantas kcal debes consumir.
          Vas a poder tener tu propio plan alimenticio personalizado, con el que podrás perder peso o ganar músculo. Además, te daremos consejos para que puedas llevar una vida saludable.
          Uno de nuestros objetivos es que tardes lo menos posible en armar y preparar tu dieta. Ya sea de la mano de un nutricionista o por tu cuenta, te ayudaremos a que puedas llevarla a cabo.
          Vas a poder modificar los valores que quieras y ver cómo afectan a tu dieta. También vas a poder guardar tus recetas favoritas y crear tu propia lista de la compra. ¡Todo esto y mucho más gratis en AutoDi!
        </p>
      </div>}
        <h2 className='text-1xl md:text-3xl font-bold text-lime-500 font-black cursor-pointer z-30 absolute bottom-20 left-20' onClick={() => setShow(!show)}>Quienes somos?</h2>
      <div className='bg-home blur-sm brightness-50'></div>
    </main>
  );
}
