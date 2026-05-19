import styles from "./barra.module.css";

export default function Barra() {
  return (
    <header className={styles.header}>

      <div className={styles.search}>
        <span className={styles.icon}>🔍</span>

        <input
          type="text"
          placeholder="Buscar..."
          className={styles.input}
        />
      </div>

      <div className={styles.right}>
        <span>🔔</span>

        <div className={styles.avatar}>
          A
        </div>
      </div>

    </header>
  );
}