import Bienvenido from "./Bienvenido/Bienvenido";
import OpcionesMenu from "./OpcionesMenu/OpcionesMenu";
import ActividadReciente from "./ActividadReciente/ActividadReciente";

export default function InicioPage() {
  return (
    <main>
      <Bienvenido />
      <OpcionesMenu />
      <ActividadReciente />
    </main>
  );
}