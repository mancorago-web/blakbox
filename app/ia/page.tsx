import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";

export default function IA() {
  return (
    <>
      <Navbar />
      <div className="p-10 grid md:grid-cols-3 gap-8">

        <CategorySection
          title="Academia"
          color="text-purple-500"
          items={[
            "Clases Gratuitas",
            "Clases de Pago",
            "Mentorías Privadas",
          ]}
        />

        <CategorySection
          title="Servicios"
          color="text-purple-500"
          items={[
            "Edición Digital IA (Audio Visual)",
            "Creación de Contenido IA",
            "Automatización con Agentes IA",
            "Páginas Web IA",
            "Integración IA a Proyectos",
          ]}
        />

        <CategorySection
          title="Consultoría"
          color="text-purple-500"
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