import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";

export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />

      <div style={{ flex: 1 }}>
        <Barra />

        <main style={{ padding: "20px" }}>
          <h1></h1>
        </main>
      </div>
    </div>
  );
}

