import styles from "./OpcionesMenu.module.css";

import Link from "next/link";

import {
  Upload,
  Search,
  MessageSquare,
} from "lucide-react";

export default function OpcionesMenu() {
  return (
    <section className={styles.container}>

      <Link href="/material" className={styles.cardBlue}>
        <div className={styles.iconBlue}>
          <Upload size={28}/>
        </div>

        <h2>Subir Material</h2>

        <p>
          Comparte tu material de estudio con la comunidad
        </p>
      </Link>

      <Link href="/asesoria" className={styles.cardGreen}>
        <div className={styles.iconGreen}>
          <Search size={28}/>
        </div>

        <h2>Buscar Asesorías</h2>

        <p>
          Encuentra asesores expertos en tu materia
        </p>
      </Link>

      <Link href="/mensajes" className={styles.cardYellow}>
        <div className={styles.iconYellow}>
          <MessageSquare size={28}/>
        </div>

        <h2>Mensajes Recientes</h2>

        <p>
          Revisa tus conversaciones activas
        </p>
      </Link>

    </section>
  );
}