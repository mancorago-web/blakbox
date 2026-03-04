import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

export default function IA() {
  return (
    <>
      <Navbar />
      <div className="p-10 grid md:grid-cols-3 gap-8">

        <CategorySection
          title="Academia"
          items={[
            "Clases Gratuitas",
            "Clases de Pago",
            "Mentorías Privadas",
          ]}
        />

        <CategorySection
          title="Servicios"
          items={[
            "Edición Digital IA (Fotos, Video, Audio)",
            "Creación de Contenido Publicitario IA",
            "Automatización con Agentes IA",
          ]}
        />

        <CategorySection
          title="Consultoría"
          items={[
            "Optimización de Procesos con IA",
            "Integración de IA en Negocios",
            "Estrategia Digital con Inteligencia Artificial",
          ]}
        />

      </div>
    </>
  );
}