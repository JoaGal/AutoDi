import Image from 'next/image';
import leaves from './assets/leaves.svg';
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center bg-lime-500 h-72">
        <h1 className="text-3xl font-bold no-underline text-stone-50 mr-2">AutoDi</h1>
        <Image src={leaves} alt="leaves" width={30}/>
      </div>
    </main>
  );
}
