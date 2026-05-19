import styles from "./Informacion.module.css";

export default function Informacion() {
  return (
    <section className={styles.container}>

      <h2>Información Personal</h2>

      <div className={styles.formGroup}>
        <label>Carrera</label>

        <select className={styles.input}>
          <option>
            Matemáticas Aplicadas y Computación
          </option>

          <option>
            Actuaría
          </option>

          <option>
            Ingeniería Civil
          </option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Correo Institucional</label>

        <div className={styles.inputIcon}>
          <span>🔒</span>

          <input
            type="email"
            value="324967089@pcpuma.acatlan.unam.mx"
            readOnly
          />
        </div>
      </div>

    </section>
  );
}