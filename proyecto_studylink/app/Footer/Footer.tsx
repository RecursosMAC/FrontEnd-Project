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

            <h2>StudyLink</h2>

          </div>

          <p className={styles.description}>
            Plataforma académica colaborativa diseñada
            para compartir apuntes, asesorías y recursos
            universitarios.
          </p>

        </div>

        {/* Navegación */}
        <div className={styles.footerColumn}>

          <h3>Navegación</h3>

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
              <Link href="/asesoria">
                Asesorías
              </Link>
            </li>

          </ul>

        </div>

        {/* Recursos */}
        <div className={styles.footerColumn}>

          <h3>Recursos</h3>

          <ul className={styles.footerList}>

            <li>
              <Link href="/">
                Guía de Uso
              </Link>
            </li>

            <li>
              <Link href="/">
                Preguntas Frecuentes
              </Link>
            </li>

            <li>
              <Link href="/">
                Soporte
              </Link>
            </li>

            <li>
              <Link href="/">
                Comunidad
              </Link>
            </li>

          </ul>

        </div>

        {/* Contacto */}
        <div className={styles.footerColumn}>

          <h3>Contacto</h3>

          <ul className={styles.contactList}>

            <li>✉ contacto@studylink.com</li>

            <li>📞 55 5622 1234</li>

            <li>
              📍 FES Acatlán, UNAM
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

        <p>
          Hecho en FES-A 💙💛
        </p>

        <p>
          © 2025 StudyLink.
          Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}