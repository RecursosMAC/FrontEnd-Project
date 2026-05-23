"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Menu.module.css";
import {supabase} from "../../lib/supabase";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      // Obtener sesión actual
      const { data, error } = await supabase.auth.getSession();

      const session = data?.session;

      // Si NO hay sesión
      if (error || !session) {
        localStorage.removeItem("user");
        setUser(null);
        return;
      }

      // Buscar perfil del usuario
      const userId = session.user.id;

      const { data: profile, error: profileError } = await supabase
        .from("Usuario")
        .select("nombre, apellido, id_tipousuario")
        .eq("auth_id", userId)
        .maybeSingle();

      // Si hay error al buscar perfil
      if (profileError) {
        const name = session.user.email || "Usuario";
        const role = "Estudiante";

        setUser({ name, role });

        localStorage.setItem(
          "user",
          JSON.stringify({ name, role })
        );

        return;
      }

      // Si existe perfil
      if (profile && profile.nombre) {
        const name =
          `${profile.nombre} ${profile.apellido}`.trim();

        const role =
          profile.id_tipousuario === 1
            ? "Estudiante"
            : "Asesor";

        setUser({ name, role });

        localStorage.setItem(
          "user",
          JSON.stringify({ name, role })
        );
      } else {
        // Usuario sin perfil completo
        const name = session.user.email || "Usuario";
        const role = "Estudiante";

        setUser({ name, role });

        localStorage.setItem(
          "user",
          JSON.stringify({ name, role })
        );
      }
    };

    checkSession();
  }, []);

  const navItems = [
    { name: "Inicio", href: "/", icon: "fas fa-home" },
    { name: "Material", href: "/material", icon: "fas fa-file-alt" },
    { name: "Asesorías", href: "/asesorias", icon: "fas fa-chalkboard-user" },
    { name: "Chat", href: "/chat", icon: "fas fa-comments" },
    { name: "Mi Perfil", href: "/perfil", icon: "fas fa-user-circle" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();

    localStorage.removeItem("user");

    setUser(null);

    router.push("/");
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>

        {/* Logo */}
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <i className="fas fa-link"></i>
          </div>

          <div className={styles.logoText}>
            Study<span>Link</span>
          </div>
        </div>

        {/* Perfil */}
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {user?.name
              ?.split(" ")
              .map((word) => word[0])
              .slice(0, 2)
              .join("") || "U"}
          </div>

          <div className={styles.userInfo}>
            <h4>{user?.name || "Invitado"}</h4>
            <p>{user?.role || "Sin sesión"}</p>
          </div>
        </div>

        {/* Navegación */}
        <ul className={styles.navMenu}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.name}
                className={`${styles.navItem} ${
                  isActive ? styles.active : ""
                }`}
              >
                <Link
                  href={item.href}
                  className={styles.navLink}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Login / Logout */}
        <div className={styles.logoutSection}>
          {user ? (
            <button
              className={styles.logoutBtn}
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Cerrar Sesión</span>
            </button>
          ) : (
            <button
              className={styles.logoutBtn}
              onClick={() => router.push("/login")}
            >
              <i className="fas fa-sign-in-alt"></i>
              <span>Iniciar Sesión</span>
            </button>
          )}
        </div>

      </div>
    </aside>
  );
};

export default Menu;