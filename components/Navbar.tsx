"use client";

import Link from "next/link";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-white transition"
          >
            Acceso
          </button>
        </div>
      </nav>

      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}