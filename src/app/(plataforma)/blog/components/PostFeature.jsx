import Image from "next/image"
import Link from "next/link"
import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa"
import { PostsRead } from "./PostsRead"

export const PostFeature = () => {
  return (
    <section className="pt-10">
        <div className="flex flex-col lg:items-start lg:grid lg:grid-cols-2 gap-8 py-16 lg:container mx-auto px-5">            
            <Link href='#'>
            <article className="rounded-lg overflow-hidden shadow-md bg-slate-400 dark:bg-nav-800">
                <div className="relative">
                    <Image src='/Equipo.webp' width={584} height={330} className="aspect-video object-cover w-full"/>
                    <div className="flex items-center gap-2">
                        <p className="absolute px-1 text-base font-medium translate-y-1/2 left-4 bottom-0 bg-categoria-200 text-white dark:hover:bg-categoria-100 transition-colors rounded-md">Categoria</p>
                        <p className="absolute px-1 text-base font-medium translate-y-1/2 left-28 bottom-0 bg-categoria-200 text-white dark:hover:bg-categoria-100 transition-colors rounded-md">Post Destacado</p>
                    </div> 
                </div>
                <div className="p-4">
                    <h2 className="font-semibold mb-2 mt-2 text-base md:text-2xl">Titulo</h2>
                    <p className="text-sm md:text-base lg:text-xl text-justify text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci id nobis iure excepturi eligendi, neque dolorem labore similique debitis voluptatibus animi dicta commodi accusantium illum architecto rem iste eveniet magni.</p>
                </div>
                <footer className="flex text-white flex-wrap gap-2 justify-between py-2 px-4 text-base bg-slate-600 dark:bg-nav-600 ">
                    <div className="flex items-center gap-2">
                            <FaUserCircle/>
                        <p>Autor</p>
                    </div>
                    <div className="flex items-center gap-2">
                            <FaClock/>
                        <p>Lectura de 8 min</p>
                    </div>
                    <div className="flex items-center gap-2">
                            <FaCalendar/>
                        <p>Hace 2 días</p>
                    </div>
                </footer>
            </article>
            </Link>
            <PostsRead/>
        </div>
    </section>
  )
}
