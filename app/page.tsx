import Image from 'next/image';
import leaves from './assets/leaves.svg';
export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center bg-lime-500 h-72 pt-20'>
        <h1 className='text-8xl font-bold no-underline text-stone-50 m-10'>AutoDi</h1>
        <Image src={leaves} alt="leaves" width={70}/>
      </div>
      <div className='wave'></div>
    </main>
  );
}
