import Tarjeta from "./Tarjetas/tarjetas";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>

      <Tarjeta
        tipo="pdf"
        titulo="Algoritmos de Ordenamiento"
        carrera="Ing. en Computación"
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

    </div>
  );
}