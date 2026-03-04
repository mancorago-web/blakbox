import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

export default function Blockchain() {
  return (
    <>
      <Navbar />
      <div className="p-10 grid md:grid-cols-3 gap-8">

        <CategorySection
          title="Academia"
          color="text-cyan-400"
          items={[
            "Clases Gratuitas",
            "Clases de Pago",
            "Mentorías Privadas",
          ]}
        />

        <CategorySection
          title="Servicios"
          color="text-cyan-400"
          items={[
            "Intercambio de Divisas",
            "Transferencias Internacionales",
            "Tokenización de Proyectos",
            "Análisis On-Chain",
            "Creación de NFT",
            "Seguridad Criptográfica",
            "Recepción y Distribución de Activos",
          ]}
        />

        <CategorySection
          title="Consultoría"
          color="text-cyan-400"
          items={[
            "Asesoría Estratégica Blockchain",
            "Optimización de Portafolio Cripto",
            "Estructuración de Proyectos Web3",
          ]}
        />

      </div>
    </>
  );
}