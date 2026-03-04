"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Obtener usuario al cargar
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    // Escuchar cambios de sesión (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          BLAK<span className="text-cyan-400">BOX</span>
        </Link>

        <div className="flex items-center gap-6 text-gray-300">

          <Link href="/blockchain" className="hover:text-cyan-400 transition">
            Blockchain
          </Link>

          <Link href="/ia" className="hover:text-purple-400 transition">
            IA
          </Link>

          {user ? (
            <div className="relative group">
              <button className="hover:text-white transition font-semibold">
                {user.user_metadata?.name || "Usuario"}
              </button>

              <div className="absolute right-0 hidden group-hover:block bg-gray-800 mt-2 p-2 rounded-lg border border-gray-700">
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  Salir
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="hover:text-white transition"
            >
              Acceso
            </button>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}