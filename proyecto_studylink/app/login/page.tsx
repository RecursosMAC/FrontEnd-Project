"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    /* Simulación de sesión */
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Ana García Martínez",
        role: "Asesor Activo",
      })
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