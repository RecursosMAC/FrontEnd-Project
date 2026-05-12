// =============================================================
// app/not-found.tsx — Pagina 404 personalizada (App Router)
// -------------------------------------------------------------
// En Next.js (App Router) NO se usa una libreria como react-router.
// El "router" es el sistema de archivos dentro de la carpeta /app:
//   - app/page.tsx          -> ruta "/"
//   - app/posts/page.tsx    -> ruta "/posts"
//   - app/users/[id]/page.tsx -> ruta "/users/:id"
//
// Archivos especiales que Next reconoce automaticamente:
//   - layout.tsx     -> layout compartido por las rutas hijas
//   - page.tsx       -> contenido de la ruta
//   - loading.tsx    -> UI mientras carga
//   - error.tsx      -> UI cuando hay un error
//   - not-found.tsx  -> UI cuando la ruta no existe (este archivo)
//
// Este componente se renderiza automaticamente cuando:
//   1) El usuario entra a una URL que no existe (ej: /cualquier-cosa).
//   2) Algun componente llama a la funcion notFound() de "next/navigation".
// =============================================================

import Link from "next/link";
import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";



export default function NotFound() {
  return (
  <div style={{ display: "flex", minHeight: "100vh" }}>
    
    <Menu />

    <div style={{ flex: 1 }}>

      <Barra />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "80vh",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "96px",
            fontWeight: "800",
            color: "#1e3a8a",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "16px",
          }}
        >
          Página no encontrada
        </h2>

        <p
          style={{
            color: "#6b7280",
            maxWidth: "500px",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          La ruta a la que intentas acceder no existe o fue movida.
        </p>

        <Link
          href="/"
          style={{
            padding: "14px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Volver al inicio
        </Link>
      </main>

    </div>
  </div>
);
}