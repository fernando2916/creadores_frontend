import { Contenido } from "./components/Contenido";
import { Header } from "./components/Header";

export const metadata = {
  title: 'Cursos'
}

export default function CursosPage() {
  return (
    <>
      <Header/>
      <main>
        <Contenido/>
      </main>
    </>
  );
}