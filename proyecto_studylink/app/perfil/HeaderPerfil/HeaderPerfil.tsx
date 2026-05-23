"use client";

import { useEffect, useState } from "react";
import styles from "./HeaderPerfil.module.css";
import { supabase } from "../../lib/supabase";

type User = {
  username: string;
};

export default function HeaderPerfil() {
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

      <div className={styles.avatar}>
        {user
          ? user.username.charAt(0).toUpperCase()
          : "U"}
      </div>

      <div className={styles.info}>
        <h1>
          {user
            ? `@${user.username}`
            : "Usuario"}
        </h1>

        {!user && (
          <p>Sin inicio de sesión activo</p>
        )}
      </div>

      <button className={styles.button}>
        Editar Perfil
      </button>

    </section>
  );
}