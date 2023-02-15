import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center bg-lime-500 p-4 ">
      <ul className="flex space-x-6 text-lg md:text-2xl text-stone-50">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/diet">Dieta</Link>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
