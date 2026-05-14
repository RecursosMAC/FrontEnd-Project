import React, { useState, useEffect } from 'react';
import styles from './modoasesor.module.css';

// Lista de materias disponibles (según captura original)
const materiasDisponibles = [
  "Algoritmos y Estructuras de Datos",
  "Programación Orientada a Objetos",
  "Bases de Datos",
  "Desarrollo Web",
  "Álgebra Lineal",
  "Contabilidad Financiera",
  "Marketing Digital",
  "Finanzas Corporativas",
  "Investigación de Operaciones",
  "Control de Calidad",
  "Gestión de Proyectos",
  "Logística y Cadena de Suministro",
];

interface ModoAsesorProps {
  onGuardar?: (materiasSeleccionadas: string[], modoActivo: boolean) => void;
}

const ModoAsesor: React.FC<ModoAsesorProps> = ({ onGuardar }) => {
  const [modoActivo, setModoActivo] = useState(true);
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<string[]>([...materiasDisponibles]);

  // Manejar cambio en checkbox individual
  const handleMateriaChange = (materia: string, checked: boolean) => {
    if (!modoActivo) return;
    if (checked) {
      setMateriasSeleccionadas(prev => [...prev, materia]);
    } else {
      setMateriasSeleccionadas(prev => prev.filter(m => m !== materia));
    }
  };

  const handleToggleModo = () => {
    setModoActivo(prev => !prev);
  };

  const handleGuardar = () => {
    if (!modoActivo) {
      alert("⚠️ El modo asesor está desactivado. Actívalo para guardar tus materias.");
      return;
    }
    const mensaje = `✅ Materias actualizadas. Asesoras en ${materiasSeleccionadas.length} materia(s)`;
    alert(mensaje);
    onGuardar?.(materiasSeleccionadas, modoActivo);
  };

  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>
        <i className="fas fa-chalkboard-user" style={{ color: "#2c7da0" }}></i> Modo Asesor
      </div>

      <div className={styles.modoStatus}>
        <div className={styles.modoText}>
          <i className="fas fa-toggle-on"></i>
          <span>Activa tu modo asesor para ofrecer tutorías y ayudar a otros estudiantes</span>
        </div>
        <div className={styles.toggleArea}>
          <span className={`${styles.modoBadge} ${modoActivo ? styles.activo : styles.inactivo}`}>
            <i className={`fas ${modoActivo ? "fa-check-circle" : "fa-power-off"}`}></i>
            {modoActivo ? " Activo" : " Inactivo"}
          </span>
          <label className={styles.toggleSwitch}>
            <input type="checkbox" checked={modoActivo} onChange={handleToggleModo} />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.materiasHeader}>
        <h3><i className="fas fa-book-open"></i> Materias en las que asesoras</h3>
        <p className={styles.sectionSub}>Selecciona las materias que dominas y en las que puedes brindar asesorías.</p>
      </div>

      <div className={styles.materiasGrid}>
        {materiasDisponibles.map(materia => (
          <div
            key={materia}
            className={`${styles.materiaItem} ${!modoActivo ? styles.disabledCheck : ''}`}
          >
            <input
              type="checkbox"
              id={`chk_${materia.replace(/\s/g, '_')}`}
              checked={materiasSeleccionadas.includes(materia)}
              onChange={(e) => handleMateriaChange(materia, e.target.checked)}
              disabled={!modoActivo}
            />
            <label htmlFor={`chk_${materia.replace(/\s/g, '_')}`}>{materia}</label>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.btnGuardar} onClick={handleGuardar}>
          <i className="fas fa-save"></i> Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default ModoAsesor;