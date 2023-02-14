import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <title>AutoDi</title>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
