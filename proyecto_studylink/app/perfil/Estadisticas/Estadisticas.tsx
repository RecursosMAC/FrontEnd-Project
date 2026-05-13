import styles from "./Estadisticas.module.css";

import {
  FileText,
  Download,
  Star,
} from "lucide-react";

export default function Estadisticas() {
  return (
    <section className={styles.container}>

      <h2>Estadísticas Personales</h2>

      <div className={styles.grid}>

        <div className={styles.cardBlue}>
          <FileText size={42} />

          <h3>24</h3>

          <p>Apuntes Compartidos</p>
        </div>

        <div className={styles.cardGreen}>
          <Download size={42} />

          <h3>342</h3>

          <p>Descargas Totales</p>
        </div>

        <div className={styles.cardYellow}>
          <Star size={42} />

          <h3>4.8</h3>

          <p>Calificación Promedio</p>
        </div>

      </div>

    </section>
  );
}