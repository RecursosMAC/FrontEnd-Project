import styles from "./tarjetas.module.css";

type CardProps = {
  tipo: string;
  titulo: string;
  carrera: string;
  materia: string;
  fecha: Date;
  autor: string;
};

export default function Tarjeta({tipo,titulo,carrera,materia,fecha,autor,}: CardProps) {
  return (
    <div className={styles.card}>

      <div className={`${styles.header} ${styles[tipo]}`}>
        <span className={styles.tipo}>{tipo.toUpperCase()}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{titulo}</div>

        <div className={styles.text}>{carrera}</div>
        <div className={styles.text}>{materia}</div>

        <div className={styles.text}>
          {fecha.toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div className={styles.autor}>
          {autor}
        </div>

        <div className={styles.button}>
          Descargar
        </div>
      </div>

    </div>
  );
}