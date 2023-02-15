import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <title>AutoDi</title>
      <head />
      <body className='bg-[url("./assets/bgHome.jpg")] bg-fixed bg-no-repeat bg-cover backdrop-blur-[5px] backdrop-brightness-50'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
