"use client";

import { useState } from "react";

import styles from "./Asesor.module.css";

export default function Asesor() {

  const materiasDisponibles = [
    "Estructuras de Datos",
    "Programación Orientada a Objetos",
    "Bases de Datos",
    "Desarrollo Web",
    "Cálculo I",
    "Álgebra Lineal",
    "Estadistica I",
    "Métodos numéricos I",
    "Programación I",
    "Optimización I",
    "Lógica matemática",
    "Redes de computo",
    "Álgebra superior",
  ];

  // Estado del switch
  const [modoAsesor, setModoAsesor] =
    useState(false);

  // Materias seleccionadas
  const [materiasSeleccionadas, setMateriasSeleccionadas] =
    useState<string[]>([
      "Programación Orientada a Objetos",
    ]);

  const toggleMateria = (materia: string) => {

    // Si NO está activo el modo asesor
    // no hace nada
    if (!modoAsesor) return;

    if (materiasSeleccionadas.includes(materia)) {

      setMateriasSeleccionadas(
        materiasSeleccionadas.filter(
          (m) => m !== materia
        )
      );

    } else {

      setMateriasSeleccionadas([
        ...materiasSeleccionadas,
        materia,
      ]);
    }
  };

  return (
    <section className={styles.container}>

      <div className={styles.header}>

        <div>
          <h2>Modo Asesor</h2>

          <p>
            Ofrece asesorías a otros estudiantes
          </p>
        </div>

        <label className={styles.switch}>

          <input
            type="checkbox"

            checked={modoAsesor}

            onChange={() => {

  setModoAsesor(!modoAsesor);

  if (modoAsesor) {
    setMateriasSeleccionadas([]);
  }

}}
          />

          <span className={styles.slider}></span>

        </label>

      </div>

      <h3>
        MATERIAS EN LAS QUE ASESORAS
      </h3>

      <div className={styles.tags}>

        {materiasDisponibles.map((materia) => (

          <button
            key={materia}

            onClick={() =>
              toggleMateria(materia)
            }

            disabled={!modoAsesor}

            className={
              materiasSeleccionadas.includes(materia)
                ? styles.activeTag
                : !modoAsesor
                ? styles.disabledTag
                : styles.tag
            }
          >
            {materia}
          </button>

        ))}

      </div>

      <div className={styles.rating}>

        ⭐⭐⭐⭐⭐

        <span>4.8</span>

        <p>
          18 asesorías realizadas
        </p>

      </div>

    </section>
  );
}