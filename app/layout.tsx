import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "BLAKBOX",
  description: "Portal de aprendizaje y servicios en Blockchain e Inteligencia Artificial.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}