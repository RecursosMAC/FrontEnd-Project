"use client";

import { useEffect, useState } from "react";
import styles from "./barra.module.css";
import {supabase} from "../../lib/supabase"

type User = {
  username: string;
};

export default function Barra() {
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
          {user
            ? user.username.charAt(0).toUpperCase()
            : "U"}
        </div>
      </div>

    </header>
  );
}