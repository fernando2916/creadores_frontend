import Image from "next/image"

export const InfoFoto = () => {
  return (
    <section className="max-w-7xl mx-5 lg:mx-auto my-10">
    <h3 className="text-center text-3xl md:text-4xl font-semibold">Informacion relevante</h3>
    
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-full md:col-span-6 ">
        <Image src='/fotografia.webp' height={500} width={500} alt="img" className='rounded-md' />
      </div>
      <div className="col-span-full md:col-span-6 ">
        <div className="">
          <h2 className="text-center text-3xl font-semibold">Agencia de Fotografía</h2>
          <p className="text-lg text-justify pt-2">En <strong>Emprendedores Foto</strong> generamos <strong>sesiones fotográficas</strong> para captar la atención visual de tu cliente.</p>
          <p className="text-lg text-justify pt-2">No importa si es en un banner en una página web, una foto de tu servicio o producto en acción o un anuncio en tu local, etc. La fotografía está presente y es clave para que puedas mostrar el valor de tu marca hacia tus potenciales clientes, e incluso puede dar la confianza que necesita para generar una compra contigo.</p>
        </div>
      </div>

    </div>
  </section>
  )
}
