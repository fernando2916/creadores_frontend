import { Header } from "./components/Header";
import { Infodiseño } from "./components/Infodiseño";

export const metadata = {
  title: 'Diseño Gráfico'
}

export default function DiseñoPage() {
  return (
    <div>
      <Header/>
      <main>
        <Infodiseño/>
      </main>
    </div>
  );
}