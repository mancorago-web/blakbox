"use client";

import "./globals.css";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") {
      router.replace("/");
    }
  }, [pathname, router]);

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}