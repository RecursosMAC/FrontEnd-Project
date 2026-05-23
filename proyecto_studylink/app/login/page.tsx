"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    if (!data.session) {
      alert("No se ha podido iniciar sesión. Intenta nuevamente.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ name: email.split("@")[0], role: "Estudiante" })
    );

    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>StudyLink</h1>

        <p>Inicia sesión para continuar</p>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}