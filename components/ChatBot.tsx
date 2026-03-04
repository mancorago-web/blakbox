"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hola 👋 ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error("Error en la API");
      }

      const data = await res.json();

      if (!data.reply) {
        throw new Error("Respuesta inválida");
      }

      setMessages([...newMessages, data.reply]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "⚠️ Hubo un problema al conectar con la IA. Intenta más tarde.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-full shadow-lg"
      >
        IA
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="p-3 border-b font-bold">Asistente IA</div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "text-right text-blue-600"
                    : "text-gray-700"
                }
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm">Escribiendo...</div>
            )}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 p-2 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-black text-white"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}