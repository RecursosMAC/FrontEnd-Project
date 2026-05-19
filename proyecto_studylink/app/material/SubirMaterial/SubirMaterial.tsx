"use client";

import { useState } from "react";

import styles from "./SubirMaterial.module.css";

export default function SubirMaterial() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <div className={styles.buttonContainer}>

        <button
          className={styles.uploadButton}

          onClick={() => setOpen(true)}
        >
          + Subir Material
        </button>

      </div>

      {open && (

        <div className={styles.overlay}>

          <div className={styles.modal}>

            <h2>
              Subir Material
            </h2>

            <input
              type="text"
              placeholder="Título del material"
            />

            <select>
              <option>Tipo de Material</option>
              <option>PDF</option>
              <option>Video</option>
              <option>Interactivo</option>
              <option>Link</option>
            </select>

            <select>
              <option>Carrera</option>
              <option>Actuaría</option>
              <option>Ingeniería Civil</option>
              <option>MAC</option>
            </select>

            <select>
              <option>Materia</option>
              <option>Programación</option>
              <option>Cálculo</option>
              <option>Álgebra</option>
            </select>

            <div className={styles.actions}>

              <button
                className={styles.cancel}

                onClick={() => setOpen(false)}
              >
                Cancelar
              </button>

              <button className={styles.save}>
                Guardar
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}