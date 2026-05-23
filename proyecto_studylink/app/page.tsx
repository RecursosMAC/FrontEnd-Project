import Menu from "./Menu/Menu";
import Barra from "./Barra/barra";
import Bienvenido from "./Inicio/Bienvenido/Bienvenido";
import OpcionesMenu from "./Inicio/OpcionesMenu/OpcionesMenu";
import ActividadReciente from "./Inicio/ActividadReciente/ActividadReciente";
import Footer from "./Footer/Footer";

export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Menu />
      
      <div style={{ flex: 1 }}>
        <Barra />
        <Bienvenido />
        <OpcionesMenu />
        <ActividadReciente />
        <Footer />
      </div>
    </div>
  );
}
