"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-gray-900 p-8 rounded-2xl w-[90%] max-w-md border border-gray-800 relative animate-fadeIn">

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Acceso Exclusivo
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Ingresa tu correo electrónico para continuar.
        </p>

        <input
          type="email"
          placeholder="tuemail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white mb-4 focus:outline-none focus:border-purple-500"
        />

        <button
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-xl font-semibold"
        >
          Registrarme
        </button>

      </div>
    </div>
  );
}