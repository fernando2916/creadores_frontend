import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";

export const PostsRead = () => {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">Lo más leído</h3>
      <ul className="flex flex-col gap-4">
        <Link href="#">
          <article className="grid grid-cols-5 gap-4 items-start">
            <Image
              src="/Equipo.webp"
              width={350}
              height={100}
              className="col-span-2 rounded-lg overflow-hidden aspect-video object-cover h-[8rem] w-[26rem]"
            />
            <div className="col-span-3 space-y-2">
              <span className="bg-link-500 py-1 rounded-md px-2 text-xs font-semibold">
                Categoria
              </span>
              <h3 className="mb-2">Titulo</h3>
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs mb-2">
                <div className="flex items-center gap-1">
                  <FaClock />
                  <p>Tiempo</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendar />
                  <p>FechaPublicacion</p>
                </div>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <FaUserCircle />
                <p>Autor</p>
              </div>
            </div>
          </article>
        </Link>
        
      </ul>
    </div>
  );
};
