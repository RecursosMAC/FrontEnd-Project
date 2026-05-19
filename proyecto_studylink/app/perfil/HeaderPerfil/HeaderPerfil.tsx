import styles from "./HeaderPerfil.module.css";

export default function HeaderPerfil() {
  return (
    <section className={styles.container}>

      <div className={styles.avatar}>
        A
      </div>

      <div className={styles.info}>
        <h1>Ana García Martínez</h1>

        <p>
          Ingeniería en Sistemas Computacionales
        </p>
      </div>

      <button className={styles.button}>
        Editar Perfil
      </button>

    </section>
  );
}