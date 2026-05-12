import styles from "./Bienvenido.module.css";

export default function Bienvenido() {
  return (
    <section className={styles.container}>
      <h1>¡Bienvenido, Ana!</h1>

      <div className={styles.stats}>
        <span>📄 24 apuntes compartidos</span>
        <span>⬇ 342 descargas</span>
        <span>⭐ 4.8 estrellas promedio</span>
      </div>
    </section>
  );
}