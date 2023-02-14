import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <title>AutoDi</title>
      <head />
      <body>{children}</body>
    </html>
  );
}
