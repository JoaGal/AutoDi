import Image from 'next/image';
import Link from 'next/link';
import leaves from './assets/leaves.svg';
import 'animate.css';
import { ButttonHome } from './components/ButttonHome';

export default function Home() {

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
      <ButttonHome />
      <div className='bg-home blur-sm brightness-50'></div>
    </main>
  );
}
