import { Steps } from "./components/Steps";

export const metadata = {
  title: 'Carrito'
}


export default function CarritoPage() {
  return (
    <div className="pt-[5rem]">
      <div className="max-w-7xl mx-10 mt-5">
      <Steps/>
      </div>
    </div>
  );
}