import "./globals.css";
import RefreshRedirect from "@/components/RefreshRedirect";
import { ReactNode } from "react";
import ChatBot from "@/components/ChatBot";

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
    <html lang="es" className="dark">
  <body>
    <RefreshRedirect />
    {children}
    <ChatBot />
  </body>
</html>
  );
}