import Image from "next/image"

export const ImageCorp = () => {
  return (
    <section className="max-w-7xl mx-5 lg:mx-auto">
      <h3 className="text-center text-2xl md:text-4xl font-semibold">
        ¿POR QUÉ TENER IMAGEN CORPORATIVA?
      </h3>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-full md:col-span-6">
          <Image src="" width={500} height={500} alt="img" className="" />
        </div>
        <div className="col-span-full md:col-span-6">
          <h2 className="">
            En donde podemos colorar tus imágenes corporativas
          </h2>
          <div className="space-y-5">
            <p className="text-lg text-justify">
              Las distintas sesiones realizadas por nosotros las puedes utilizar
              para tu página web, tus redes sociales como LinkedIn, Facebook,
              Instagram, etc. Así mismo puedes generar banners o anuncios para
              las herramientas de google como Ads y google My business.
            </p>
            <p className="text-lg text-justify">
              ¡Quieres que tus fotos sean un éxito, contáctanos ahora! Agendemos
              una cita y llevemos la imagen de tu marca a un nuevo nivel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
