import Barra from "./Barra/barra";
import Menu from "./Menu/Menu"
import { ModoAsesor } from "./ModoAsesor/modoasesor"
import {AsesoresDisponibles} from "./asesoresdisponibles/asesoresdisponibles"
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      
      <div style={{ flex: 1 }}>
        <Barra />
        <ModoAsesor />
        <AsesoresDisponibles />
        <Footer />
      </div>
    </div>
  );
}
