import React, { useState } from 'react';
import styles from './asesoriasdisponibles.module.css';

// Tipo Asesor
interface Asesor {
  nombre: string;
  carrera: string;
  materias: string[];
  rating: number;
  asesorias: number;
  avatarInicial: string;
}

// Datos de asesores (basados en la captura original)
const asesoresData: Asesor[] = [
  {
    nombre: "Carlos Mendoza López",
    carrera: "Ingeniería en Computación",
    materias: ["Cálculo Diferencial e Integral", "Álgebra Lineal"],
    rating: 4.9,
    asesorias: 45,
    avatarInicial: "CM",
  },
  {
    nombre: "María Fernanda Ruiz",
    carrera: "Administración de Empresas",
    materias: ["Contabilidad Financiera"],
    rating: 4.7,
    asesorias: 32,
    avatarInicial: "MR",
  },
  {
    nombre: "Roberto Sánchez Torres",
    carrera: "Ingeniería Industrial",
    materias: ["Investigación de Operaciones"],
    rating: 4.6,
    asesorias: 28,
    avatarInicial: "RS",
  },
  {
    nombre: "Laura Jiménez",
    carrera: "Diseño y Multimedia",
    materias: ["Diseño UX/UI", "Desarrollo Frontend"],
    rating: 4.8,
    asesorias: 19,
    avatarInicial: "LJ",
  },
  {
    nombre: "Diego Ramírez",
    carrera: "Mercadotecnia Digital",
    materias: ["Marketing Digital", "Redes Sociales"],
    rating: 4.5,
    asesorias: 23,
    avatarInicial: "DR",
  },
];

// Componente para renderizar estrellas
const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
  }
  if (hasHalf) {
    stars.push(<i key="star-half" className="fas fa-star-half-alt"></i>);
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
  }

  return <span className={styles.stars}>{stars}</span>;
};

const AsesoriasDisponibles: React.FC = () => {
  const [toast, setToast] = useState<string | null>(null);

  const handleContactar = (nombre: string) => {
    setToast(`📬 Solicitud enviada a ${nombre}. Pronto recibirás respuesta.`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.sectionTitle}>
          <i className="fas fa-users" style={{ color: "#2c7da0" }}></i> Asesores Disponibles
        </div>
        <p className={styles.sectionSub}>
          Conecta con tutores expertos y resuelve tus dudas académicas.
        </p>
      </div>

      <div className={styles.asesoresGrid}>
        {asesoresData.map((asesor) => (
          <div key={asesor.nombre} className={styles.tutorCard}>
            <div className={styles.tutorHeader}>
              <div className={styles.avatar}>{asesor.avatarInicial}</div>
              <div className={styles.tutorInfo}>
                <h4>{asesor.nombre}</h4>
                <p>{asesor.carrera}</p>
              </div>
            </div>
            <div className={styles.materiasTag}>
              {asesor.materias.map((materia) => (
                <span key={materia} className={styles.tag}>
                  {materia}
                </span>
              ))}
            </div>
            <div className={styles.rating}>
              <Stars rating={asesor.rating} />
              <span>
                <strong>{asesor.rating}</strong> (basado en {asesor.asesorias} asesorías)
              </span>
            </div>
            <button
              className={styles.contactarBtn}
              onClick={() => handleContactar(asesor.nombre)}
            >
              <i className="fas fa-comment-dots"></i> Contactar
            </button>
          </div>
        ))}
      </div>

      {toast && <div className={styles.toast}>{toast}</div>}
    </>
  );
};

export default AsesoriasDisponibles;