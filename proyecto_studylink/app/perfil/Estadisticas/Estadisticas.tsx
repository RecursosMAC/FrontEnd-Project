import styles from "./Estadisticas.module.css";

export default function Estadisticas() {
  return (
    <section className={styles.container}>

      <div className={styles.card}>
        <h2>24</h2>
        <p>Apuntes</p>
      </div>

      <div className={styles.card}>
        <h2>342</h2>
        <p>Descargas</p>
      </div>

      <div className={styles.card}>
        <h2>4.8</h2>
        <p>Calificación</p>
      </div>

    </section>
  );
}