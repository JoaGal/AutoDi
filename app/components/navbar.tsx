import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-300 text-black p-4 fixed flex items-center justify-center h-12 top-0 left-0 w-full z-100 bg_bottom">
      <ul className="flex space-x-4">
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
      {/* <img src="bg.svg" alt="bg" className="h-12 ml-4" /> */}
    </nav>
  );
}
