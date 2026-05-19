"use client";

import styles from "./Filtros.module.css";

export default function Filtros() {

  return (
    <section className={styles.container}>

      <h2>
        Filtrar Materiales
      </h2>

      <div className={styles.filtersGrid}>

        {/* Tipo */}

        <select className={styles.select}>
          <option>Tipo de Material</option>
          <option>PDF</option>
          <option>Video</option>
          <option>Interactivo</option>
          <option>Link</option>
        </select>

        {/* Carrera */}

        <select className={styles.select}>
          <option>Carrera</option>
          <option>Actuaría</option>
          <option>Ingeniería Civil</option>
          <option>MAC</option>
        </select>

        {/* Materia */}

        <select className={styles.select}>
          <option>Materia</option>
          <option>Programación</option>
          <option>Cálculo</option>
          <option>Álgebra</option>
          <option>Estadística</option>
        </select>

        {/* Orden */}

        <select className={styles.select}>
          <option>Ordenar por</option>
          <option>Mejor Calificados</option>
          <option>Más Descargados</option>
          <option>Más Recientes</option>
        </select>

      </div>

    </section>
  );
}