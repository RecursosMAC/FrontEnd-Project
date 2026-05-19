import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";
import Chat from "./chat/chat";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
      }}
    >
      <Menu />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Barra />

        {/* Contenedor principal del chat */}
        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "calc(100vh - 120px)",
            }}
          >
            <Chat />
          </div>
        </main>
      </div>
    </div>
  );
}