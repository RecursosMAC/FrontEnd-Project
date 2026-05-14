"use client";

import { useState } from "react";
import styles from "./modoasesor.module.css"

export const ModoAsesor = () => {
  const [active, setActive] = useState(true);

  const materias = [
    "Algoritmos y Estructuras de Datos",
    "Programación Orientada a Objetos",
    "Bases de Datos",
    "Desarrollo Web",
    "Cálculo Diferencial e Integral",
    "Álgebra Lineal",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleMateria = (materia: string) => {
    if (!active) return; //bloquea si está apagado

    setSelected((prev) =>
      prev.includes(materia)
        ? prev.filter((m) => m !== materia)
        : [...prev, materia]
    );
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Asesorías Académicas</h1>

      <div className={styles.card}>
        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Modo Asesor</h2>
            <p className={styles.subtitle}>
              Activa tu modo asesor para ofrecer tutorías y ayudar a otros estudiantes
            </p>
          </div>

          {/* SWITCH */}
          <button
            className={`${styles.switch} ${active ? styles.active : ""}`}
            onClick={() => setActive(!active)}
          >
            <span className={styles.circle}></span>
          </button>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* MATERIAS */}
        <div className={styles.subjectSection}>
          <p className={styles.label}>MATERIAS EN LAS QUE ASESORAS</p>

          <div className={styles.subjects}>
            {materias.map((m) => (
              <button
                key={m}
                onClick={() => toggleMateria(m)}
                disabled={!active}
                className={`
                  ${styles.subject}
                  ${selected.includes(m) ? styles.selected : ""}
                  ${!active ? styles.disabled : ""}
                `}
              >
                {m}
              </button>
            ))}
          </div>

          <button
            className={styles.saveBtn}
            disabled={!active}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </section>
  );
};

