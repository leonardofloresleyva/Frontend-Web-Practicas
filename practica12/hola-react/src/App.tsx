import { Saludo } from "./Saludo";
import { TarjetaPerfil } from "./TarjetaPerfil";

export default function App() {
  return (
    <main className="App">
      <Saludo nombre="ISW"/>

      <section className="equipo">
        <TarjetaPerfil nombre="Yuri Germán García" carrera="Ingeniería en Software" semestre={5}/>
        <TarjetaPerfil nombre="Ramón Valenzuela" carrera="Ingeniería en Software" semestre={4}/>
        <TarjetaPerfil nombre="Rodri Tovar" carrera="Ingeniería en Software" semestre={3}/>
      </section>
    </main>
  );
}