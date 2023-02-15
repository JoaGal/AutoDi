import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center bg-lime-500 p-4 z-20 relative">
      <ul className="flex space-x-6 text-lg md:text-2xl text-stone-50 animate__animated animate__bounceInLeft ">
        <li className='hover:text-amber-100'>
          <Link href="/">Inicio</Link>
        </li>
        <li className='hover:text-amber-100'>
          <Link href="/diet">Dieta</Link>
        </li>
        <li className='hover:text-amber-100'>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
