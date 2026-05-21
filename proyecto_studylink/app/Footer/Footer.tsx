import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>

      <div className={styles.footerContent}>

        {/* Logo */}
        <div className={styles.footerColumn}>

          <div className={styles.logoSection}>

            <div className={styles.logoCircle}>
              🎓
            </div>

            <h2 className={styles.whiteText}>
              StudyLink
            </h2>

          </div>

          <p className={`${styles.description} ${styles.whiteText}`}>
            Plataforma académica colaborativa diseñada
            para compartir apuntes, asesorías y recursos
            universitarios.
          </p>

        </div>

        {/* Navegación */}
        <div className={styles.footerColumn}>

          <h3 className={styles.whiteText}>
            Navegación
          </h3>

          <ul className={styles.footerList}>

            <li>
              <Link href="/">
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/material">
                Material
              </Link>
            </li>

            <li>
              <Link href="/perfil">
                Perfil
              </Link>
            </li>

            <li>
              <Link href="/asesorias">
                Asesorías
              </Link>
            </li>

          </ul>

        </div>

        {/* Recursos */}
        <div className={styles.footerColumn}>

          <h3 className={styles.whiteText}>
            Recursos
          </h3>

          <ul className={styles.footerList}>

            <li>
              <Link href="/404">
                Guía de Uso
              </Link>
            </li>

            <li>
              <Link href="/404">
                Preguntas Frecuentes
              </Link>
            </li>

            <li>
              <Link href="/404">
                Soporte
              </Link>
            </li>

            <li>
              <Link href="/404">
                Comunidad
              </Link>
            </li>

          </ul>

        </div>

        {/* Contacto */}
        <div className={styles.footerColumn}>

          <h3 className={styles.whiteText}>
            Contacto
          </h3>

          <ul className={styles.contactList}>

            <li>
              <a href="mailto:contacto@studylink.com">
                ✉ contacto@studylink.com
              </a>
            </li>

            <li className={styles.whiteText}>
              📞 55 5622 1234
            </li>

            <li>
              <Link href="/institucional/unam">
                📍FES Acatlán - UNAM
              </Link>
            </li>

            <li>
              <a
                href="https://maps.app.goo.gl/xKfA3UKtWDJwjAix8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Av. Alcanfores y San Juan Totoltepec s/n,
                Santa Cruz Acatlán, Naucalpan,
                Estado de México
              </a>
            </li>

          </ul>

          <div className={styles.socials}>

            <a href="https://facebook.com">
              f
            </a>

            <a href="https://x.com">
              X
            </a>

            <a href="https://instagram.com">
              i
            </a>

          </div>

        </div>

      </div>

      {/* Footer Bottom */}

      <div className={styles.footerBottom}>

        <p className={styles.whiteText}>
          Hecho en FES-Acatlán por estudiantes para estudiantes.
        </p>

        <p className={styles.whiteText}>
          © 2025 StudyLink.
          Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}