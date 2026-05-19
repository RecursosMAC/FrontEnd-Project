import { Estrellas } from '../Estrellas/Estrellas';
import styles from './Tarjetas.module.css';

interface TarjetasProps {
  nombre: string;
  carrera?: string;
  materias: string[];
  rating: number;
  asesorias: number;
  avatarInicial: string;
  badge?: string;
  onContactar: (nombre: string) => void;
}

export const Tarjetas = ({
  nombre,
  carrera,
  materias,
  rating,
  asesorias,
  avatarInicial,
  badge,
  onContactar,
}: TarjetasProps) => {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.header}>
        <div className={styles.avatar}>{avatarInicial}</div>
        <div className={styles.info}>
          <h4>{nombre}</h4>
          {badge ? (
            <span className={styles.badge}>{badge}</span>
          ) : (
            carrera && <p>{carrera}</p>
          )}
        </div>
      </div>

      <div className={styles.materiasSection}>
        <div className={styles.materiasTitulo}>MATERIAS</div>
        <ul className={styles.materiasLista}>
          {materias.map((materia) => (
            <li key={materia}>{materia}</li>
          ))}
        </ul>
      </div>

      <div className={styles.rating}>
        <Estrellas rating={rating} />
        <span>
          <strong>{rating}</strong> (basado en {asesorias} asesorías)
        </span>
      </div>

      <button
        className={styles.contactarBtn}
        onClick={() => onContactar(nombre)}
      >
        <i className="fas fa-comment-dots"></i> Contactar
      </button>
    </div>
  );
};