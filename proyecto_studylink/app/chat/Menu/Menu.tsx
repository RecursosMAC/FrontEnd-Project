"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/", icon: "fas fa-home" },
    { name: "Material", href: "/material", icon: "fas fa-file-alt" },
    { name: "Asesorías", href: "/asesorias", icon: "fas fa-chalkboard-user" },
    { name: "Chat", href: "/chat", icon: "fas fa-comments" },
    { name: "Mi Perfil", href: "/perfil", icon: "fas fa-user-circle" },
  ];

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
          <div className={styles.avatar}>AG</div>
          <div className={styles.userInfo}>
            <h4>Ana García Martínez</h4>
            <p>Asesor Activo</p>
          </div>
        </div>

        {/* Navegación */}
        <ul className={styles.navMenu}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.name}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                <a href={item.href} className={styles.navLink}>
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>



        {/* Cerrar Sesión */}
        <div className={styles.logoutSection}>
          <a href="/logout" className={styles.logoutBtn}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Cerrar Sesión</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Menu;

