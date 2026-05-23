"use client";

import { useEffect, useState } from "react";
import styles from "./Informacion.module.css";
import { supabase } from "../../lib/supabase";

type User = {
  email: string;
};

export default function Informacion() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadSession() {
      const { data, error } = await supabase.auth.getSession();

      const session = data?.session;

      // Sin sesión
      if (error || !session) {
        setUser(null);
        return;
      }

      const email = session.user.email;

      if (email) {
        setUser({
          email,
        });
      }
    }

    loadSession();
  }, []);

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
            value={
              user?.email ||
              "Se requiere inicio de sesión"
            }
            readOnly
          />
        </div>
      </div>

    </section>
  );
}