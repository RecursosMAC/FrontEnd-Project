import Menu from "../Menu/Menu";
import Barra from "../Barra/barra";
import HeaderPerfil from "./HeaderPerfil/HeaderPerfil";
import Estadisticas from "./Estadisticas/Estadisticas";
// import Informacion from "./Informacion/Informacion";
// import Actividad from "./Actividad/Actividad";

export default function PerfilPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      
      <Menu />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        <Barra />

        <HeaderPerfil />

        <Estadisticas />        

        

      </div>

    </div>
  );
}