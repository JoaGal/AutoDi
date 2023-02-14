import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
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
