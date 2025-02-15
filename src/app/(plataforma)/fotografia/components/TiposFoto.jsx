import Image from "next/image"

export const TiposFoto = () => {
  return (
    <section className="max-w-7xl p-5 lg:mx-auto my-10 bg-slate-300 dark:bg-cont-100">
      <h3 className="text-center text-4xl font-semibold">Tipos de foto</h3>
      <div className="grid grid-cols-12 mx-auto gap-5 pt-5">
        <div className="col-span-full md:col-span-6 flex items-center justify-center">
          <div className="">
            <Image src='/urbano 2.webp' alt="img" width={500} height={500} className=" h-[400px] w-auto " />
          </div>
        </div>
        <div className="col-span-full md:col-span-6">
          <h2 className="text-center text-4xl font-medium">Retrato</h2>
          <p className="text-justify py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            facilis error non ex rem delectus excepturi architecto dolor
            perferendis repellat quaerat, necessitatibus, ipsam in eveniet
            itaque! Architecto consectetur dolore eius.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 mx-auto gap-5 pt-5">
        <div className="col-span-full md:col-span-6 order-1 md:-order-none">
          <h2 className="text-center text-4xl font-medium">Estudio</h2>
          <p className="text-justify py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            facilis error non ex rem delectus excepturi architecto dolor
            perferendis repellat quaerat, necessitatibus, ipsam in eveniet
            itaque! Architecto consectetur dolore eius.
          </p>
        </div>
        <div className="col-span-full md:col-span-6 flex items-center justify-center ">
          <Image
            src='/estudio.webp'
            alt="img"
            width={500} height={500}
            className="bg-cover justify-center h-[400px] w-auto object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 mx-auto gap-5 pt-5">
    
        <div className="col-span-full md:col-span-6 order-1 md:-order-none">
          <h2 className="text-center text-4xl font-medium">Corporativa</h2>
          <p className="text-justify py-2">
            Enamora a tus clientes incluso antes de comprar tus productos.
          </p>
        </div>
        <div className="col-span-full md:col-span-6 flex items-center justify-center">
          <Image src='/' width={500} height={500} alt="img" />
        </div>
      </div>
      <div className="grid grid-cols-12 mx-auto gap-5 pt-5">
      <div className="col-span-full md:col-span-6 flex items-center justify-center">
          <Image src='/' width={500} height={500} alt="img" />
        </div>
        <div className="col-span-full md:col-span-6 order-1 md:-order-none">
          <h2 className="text-center text-4xl font-medium">Producto</h2>
          <p className="text-justify py-2">
            Enamora a tus clientes incluso antes de comprar tus productos.
          </p>
        </div>
        
      </div>
    </section>
  )
}
