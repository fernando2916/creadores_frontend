import Link from "next/link";
import {FaHome} from 'react-icons/fa'

export const metadata = {
    title: 'Página no Encontrada'
  }

export default function NotFoundPage() {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-link-300 dark:text-link-600 text-3xl">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight  sm:text-7xl">
            Página no Encontrada
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-slate-500 sm:text-xl/8">
           Ups, al parecer la página solicitada no existe.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 mt-5 flex items-center gap-2"
            >
              <FaHome/>
              Regresar al inicio
            </Link>
            
          </div>
        </div>
      </main>
  );
}