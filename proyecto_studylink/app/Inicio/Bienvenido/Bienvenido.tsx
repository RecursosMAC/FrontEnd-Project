"use client";

import { useEffect, useState } from "react";
import styles from "./Bienvenido.module.css";
import { supabase } from "../../lib/supabase";

type User = {
  username: string;
};

export default function Bienvenido() {
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

      // Obtener email
      const email = session.user.email;

      if (email) {
        const username = email.split("@")[0];

        setUser({
          username,
        });
      }
    }

    loadSession();
  }, []);

  return (
    <section className={styles.container}>
      <h1>
        ¡Bienvenido, {user ? `@${user.username}` : "Usuario"}!
      </h1>

      <div className={styles.stats}>
        <span>📄 24 apuntes compartidos</span>
        <span>⬇ 342 descargas</span>
        <span>⭐ 4.8 estrellas promedio</span>
      </div>
    </section>
  );
}