import { FormCotizacion } from "./components/FormCotizacion";
import { Header } from "./components/Header";
import { Nosotros } from "./components/Nosotros";
import { Portafolio } from "./components/Portafolio";
import { Services } from "./components/Services";

export const metadata = {
  title: 'Diseño y Desarrollo Web'
}

export default function ProgramacionPage() {
  return (
    <div className="pt-[5rem]">
      <Header/>
      <main>
        <Nosotros/>
        <Services/>
        <Portafolio/>
        <FormCotizacion/>
      </main>
    </div>
  );
}