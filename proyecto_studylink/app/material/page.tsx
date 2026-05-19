import Grid from "./grid/grid";
import Tarjeta from "./Tarjetas/tarjetas";
import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";
import Footer from "../Footer/Footer";
import Filtros from "./Filtros/Filtros";
import SubirMaterial from "./SubirMaterial/SubirMaterial";


export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      
      <div style={{ flex: 1 }}>
        <Barra />
        <SubirMaterial />
        <Filtros />
        <Grid />
        <Footer />
      </div>
    </div>
  );
}
