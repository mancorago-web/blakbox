import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6 bg-gradient-to-r from-black via-gray-900 to-black">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        BLAK<span className="text-cyan-400">BOX</span>
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Portal de aprendizaje y servicios en Blockchain e Inteligencia Artificial.
      </p>

      <div className="flex gap-6">
        <Link
          href="/blockchain"
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          Explorar Blockchain
        </Link>

        <Link
          href="/ia"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition"
        >
          Explorar IA
        </Link>
      </div>
    </section>
  );
}