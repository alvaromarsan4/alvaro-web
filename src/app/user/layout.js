'use client';
import EncabezadoH2 from "../components/EncabezadoH2";
export default function RootLayout({ children }) {
  return (
    <div>
      <EncabezadoH2 nombre="Fulanito"/>
      {children}
    </div>
  );
}