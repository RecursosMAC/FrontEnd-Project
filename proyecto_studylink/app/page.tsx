import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";
import Tarjeta from "./Tarjetas/tarjetas";

export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />

      <div style={{ flex: 1 }}>
        <Barra />

        <main style={{ padding: "20px", display: "flex", gap: "20px" }}>
          <Tarjeta
            tipo="pdf"
            titulo="Algoritmos de Ordenamiento"
            carrera="MAC"
            materia="Estructuras de Datos"
            fecha={new Date(2025, 0, 14)}
            autor="Ana García Martínez"
          />

          <Tarjeta
            tipo="video"
            titulo="Cálculo Integral"
            carrera="Matemáticas"
            materia="Cálculo II"
            fecha={new Date(2025, 1, 10)}
            autor="Juan Pérez"
          />
        </main>
      </div>
    </div>
  );
}
