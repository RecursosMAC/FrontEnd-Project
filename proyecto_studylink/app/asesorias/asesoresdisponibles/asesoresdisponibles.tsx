"use client";
import { useState } from 'react';
import { Tarjetas } from '../Tarjetas/Tarjetas';
import { Notificacion } from '../Notificacion/Notificacion';
import styles from './asesoresdisponibles.module.css';

// Datos de asesores (incluyendo el nuevo con badge)
interface Asesor {
  nombre: string;
  carrera?: string;
  materias: string[];
  rating: number;
  asesorias: number;
  avatarInicial: string;
  badge?: string;
}

const asesoresData: Asesor[] = [
  {
    nombre: "Ana García Martínez",
    badge: "Asesor Activo",
    materias: [],
    rating: 4.9,
    asesorias: 52,
    avatarInicial: "AG",
  },
  {
    nombre: "Carlos Mendoza López",
    carrera: "Ingeniería en Computación",
    materias: ["Cálculo Integral", "Álgebra Lineal"],
    rating: 4.9,
    asesorias: 45,
    avatarInicial: "CM",
  },
  {
    nombre: "María Fernanda Ruiz",
    carrera: "Ingeneria Civil",
    materias: ["Cálculo diferencial"],
    rating: 4.7,
    asesorias: 32,
    avatarInicial: "MR",
  },
  {
    nombre: "Laura Jiménez",
    carrera: "Matemáticas Aplicadas y Computación",
    materias: ["Desarrollo Web"],
    rating: 4.8,
    asesorias: 19,
    avatarInicial: "LJ",
  },
  {
    nombre: "Diego Ramírez",
    carrera: "Actuaría",
    materias: ["Probabilidad"],
    rating: 4.5,
    asesorias: 23,
    avatarInicial: "DR",
  },
];

export const AsesoresDisponibles = () => {
  const [mensajeNotificacion, setMensajeNotificacion] = useState<string | null>(null);

  const handleContactar = (nombre: string) => {
    setMensajeNotificacion(`📬 Solicitud enviada a ${nombre}. Pronto recibirás respuesta.`);
    setTimeout(() => setMensajeNotificacion(null), 3000);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.tituloSeccion}>
          <i className="fas fa-users" style={{ color: "#2c7da0" }}></i> Asesores Disponibles
        </div>
        <p className={styles.subtitulo}>
          Conecta con tutores expertos y resuelve tus dudas académicas.
        </p>
      </div>

      <div className={styles.gridAsesores}>
        {asesoresData.map((asesor) => (
          <Tarjetas
            key={asesor.nombre}
            nombre={asesor.nombre}
            carrera={asesor.carrera}
            materias={asesor.materias}
            rating={asesor.rating}
            asesorias={asesor.asesorias}
            avatarInicial={asesor.avatarInicial}
            badge={asesor.badge}
            onContactar={handleContactar}
          />
        ))}
      </div>

      <Notificacion mensaje={mensajeNotificacion} />
    </>
  );
};

export default AsesoresDisponibles;