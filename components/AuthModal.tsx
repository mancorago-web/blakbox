"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    if (error) alert(error.message);
    else alert("Registro exitoso, revisa tu correo.");
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
    else {
      alert("Ingreso exitoso");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-gray-900 p-8 rounded-2xl w-[90%] max-w-md border border-gray-800 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`font-semibold ${mode === "login" ? "text-purple-500" : "text-gray-400"}`}
          >
            Ingreso
          </button>
          <button
            onClick={() => setMode("register")}
            className={`font-semibold ${mode === "register" ? "text-purple-500" : "text-gray-400"}`}
          >
            Registro
          </button>
        </div>

        {mode === "register" && (
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white mb-4"
          />
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white mb-4"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl bg-black border border-gray-700 text-white mb-4"
        />

        <button
          onClick={mode === "login" ? handleLogin : handleRegister}
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-xl font-semibold"
        >
          {mode === "login" ? "Ingresar" : "Registrarme"}
        </button>
      </div>
    </div>
  );
}