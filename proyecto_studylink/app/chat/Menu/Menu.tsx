"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    role: string;
  } | null>(null);

  useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    setUser(JSON.parse(storedUser));
  } else {
    setUser(null);
  }
}, []);

  const navItems = [
    { name: "Inicio", href: "/", icon: "fas fa-home" },
    { name: "Material", href: "/material", icon: "fas fa-file-alt" },
    { name: "Asesorías", href: "/asesorias", icon: "fas fa-chalkboard-user" },
    { name: "Chat", href: "/chat", icon: "fas fa-comments" },
    { name: "Mi Perfil", href: "/perfil", icon: "fas fa-user-circle" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
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

        {/* Perfil del usuario */}
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {user?.name
              ?.split(" ")
              .map((word) => word[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div className={styles.userInfo}>
            <h4>{user?.name || "Usuario"}</h4>
            <p>{user?.role || "Sin rol"}</p>
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
                <a href={item.href} className={styles.navLink}>
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Cerrar sesión */}
        <div className={styles.logoutSection}>
          <button
            className={styles.logoutBtn}
            onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt"></i>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Menu;