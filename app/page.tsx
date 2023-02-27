import Image from 'next/image';
import logo from './assets/logo.ico'
import 'animate.css';
import { ButttonHome } from './components/homeComponents/ButttonHome';
import { StatsCard } from './components/homeComponents/StatsCard';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center bg-lime-500 md:h-60 h-10 pt-20 md:pt-0">
        <h1 className="md:text-8xl text-5xl font-bold no-underline text-stone-50 md:m-4 m-2 animate__animated animate__bounceInDown">
          AutoDi
        </h1>
        <Image
          src={logo}
          alt="leaves"
          width={90}
          className="animate__animated animate__bounceInDown "
        />
      </div>
      <div className='bg-[url(./assets/wave.svg)] bg-no-repeat bg-cover bg-bottom md:h-60 h-52 w-full' />
      <StatsCard />
      <ButttonHome />
    </main>
  );
}
