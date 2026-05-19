import Grid from "./grid/grid";
import Tarjeta from "./Tarjetas/tarjetas";
import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";
import Footer from "../Footer/Footer";


export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      
      <div style={{ flex: 1 }}>
        <Barra />
        <Grid />
        <Footer />
      </div>
    </div>
  );
}
