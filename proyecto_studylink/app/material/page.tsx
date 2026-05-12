import Grid from "./grid/grid";
import Tarjeta from "./Tarjetas/tarjetas";
import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";


export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      
      <div style={{ flex: 1 }}>
        <Barra />
        <Grid />
      </div>
    </div>
  );
}
