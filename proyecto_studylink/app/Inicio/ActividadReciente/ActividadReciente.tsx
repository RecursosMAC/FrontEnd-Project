import styles from "./ActividadReciente.module.css";

export default function ActividadReciente() {
  return (
    <section className={styles.container}>

      <h2>Actividad Reciente</h2>

      <div className={styles.activity}>
        <div className={styles.blue}></div>

        <div>
          <h3>Subiste "Algoritmos de Ordenamiento"</h3>
          <p>Hace 2 horas</p>
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.green}></div>

        <div>
          <h3>Descargaste "Cálculo Integral"</h3>
          <p>Hace 5 horas</p>
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.yellow}></div>

        <div>
          <h3>Recibiste una calificación de 5 estrellas</h3>
          <p>Ayer</p>
        </div>
      </div>

    </section>
  );
}