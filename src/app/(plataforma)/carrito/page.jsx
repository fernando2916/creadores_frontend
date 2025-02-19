import Link from "next/link";
import { Detalles } from "./components/Detalles";
import Image from "next/image";

export const metadata = {
  title: 'Carrito'
}


export default function CarritoPage() {
  const data = 'true';

  return (
    <main className="pt-[5rem]">
      <div className="max-w-7xl mx-auto mt-12 sm:px-6 lg:px-8 px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-2">Carrito de compras</h2>
        { data === 'true' ? (
          <Detalles/>

        ) : (
          <>
          <div className="mb-8">
            <div className="rounded-[.5rem] mb-8 bg-slate-300 dark:bg-nav-800 shadow-xl shadow-slate-400 dark:shadow-nav-600">
              <div className="p-6">
                <figure>
                  <Image 
                  src='/Question-mark.png' 
                  alt="question mark" 
                  className="w-72 mx-auto" 
                  width={350} 
                  height={350}/>
                </figure>
                <p className="mt-2 mb-3 text-center">Parece que no tienes artículos en el carrito de compras</p>
                <div className="flex gap-2 justify-center pb-4">
                <Link href='/tienda' className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2">
                Ir a la tienda 
                </Link>
                <Link href='/cursos' className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2">
                Ir a los cursos 
                </Link>
                
                </div>
              </div>
            </div>

          </div>
          </>
        )}
      </div>
    </main>
  );
}