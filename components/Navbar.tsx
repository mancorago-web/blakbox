"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      <Link href="/" className="text-2xl font-bold tracking-wider">
        BLAK<span className="text-cyan-400">BOX</span>
      </Link>

      <div className="flex gap-6 text-gray-300">
        <Link href="/blockchain" className="hover:text-cyan-400 transition">
          Blockchain
        </Link>
        <Link href="/ia" className="hover:text-purple-400 transition">
          IA
        </Link>
        <Link href="#" className="hover:text-white transition">
          Acceso
        </Link>
      </div>
    </nav>
  );
}