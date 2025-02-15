import Image from "next/image";
import { Header } from "./components/Header";

import {
  FaAngleLeft,
  FaAngleRight,
  FaDownload,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: 'Recursos'
}

export default function RecursosPage() {
  return (
    <>
      <Header/>
      <main className="m-2">
        <h5 className="flex items-center gap-x-2 mb-5">
          Mostrando
          <span className="font-bold">1-10</span>
          de
          <span className="font-bold">30</span>
          Recursos
        </h5>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          <li>
            <div className="bg-slate-300 dark:bg-nav-800 p-3 rounded-2xl">
              <div className="relative">
                <Image src='/Equipo.webp' width={500} height={500} alt="" className="rounded-t-lg mb-3 relative" />
              <div className="bg-categoria-200 text-white dark:bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3">
                <span className="font-semibold text-base text-white p-2">Categoria</span>
              </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-btn-50 dark:text-btn-200">
                  Diseñador UI/UX
                </h3>
                <ul className="inline-flex items-center gap-x-2 flex-wrap mb-5">
                  <li className="text-xs font-medium">
                    Adobe Illustrator
                  </li>
                  <li className="text-link-100 dark:text-link-300 text-xs font-medium">
                    .ai .eps
                  </li>
                </ul>
                <h4 className="text-link-300 dark:text-link-100 text-sm font-bold mb-5">
                  $ 8,000 MXN - $ 10,000 MXN
                </h4>
                <h5 className="mb-1 font-semibold">Descripción</h5>
                <div className="mb-3">
                  <p className=" text-justify line-clamp-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Autem molestiae amet esse unde hic fuga numquam. iusto aut,
                    commodi voluptatum eum dolorum dignissimos? Cumque, deleniti
                    consequatur animi architecto nemo impedit!{" "}
                  </p>
                  <span className="text-link-100 hover:text-link-400 transition-colors">
                    <Link href='/'>Ver más</Link>
                  </span>
                </div>
              </div>
              <button className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-2 flex text-lg font-semibold mx-auto rounded-md items-center gap-2">
                <FaDownload />
                Descargar
              </button>
            </div>
          </li>
        </ul>
        <div className="my-10 flex items-center justify-center gap-x-2 overflow-x-auto">
          <button className="relative hover:bg-btn-400 p-3 rounded-full transition-colors duration-150">
            <FaAngleLeft className="text-xl" />
          </button>
          <button className="flex items-center justify-center w-10 p-2 text-link-100  transitions-colors duration-150 text-lg">
            1
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            2
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            3
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            4
          </button>
          <button className="flex items-center justify-center w-10 p-2 hover:text-link-300  transitions-colors duration-150 text-lg">
            5
          </button>

          <button className="relative hover:bg-btn-400 p-3 rounded-full transition-colors duration-150">
            <FaAngleRight className="text-xl" />
          </button>
        </div>
      </main>
    </>
  );
}