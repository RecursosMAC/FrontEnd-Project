import styles from './Notificacion.module.css';

interface NotificacionProps {
  mensaje: string | null;
}

export const Notificacion = ({ mensaje }: NotificacionProps) => {
  if (!mensaje) return null;
  return <div className={styles.notificacion}>{mensaje}</div>;
};