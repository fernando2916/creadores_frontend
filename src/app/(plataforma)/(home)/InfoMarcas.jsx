import Image from "next/image"

export const InfoMarcas = () => {
  return (
    <section className=" py-24 sm:py-32 bg-cont-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 ">
          Las principales empresas eligen a Emprendedores Creativos para desarrollar sus habilidades profesionales más demandadas.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            width={50}
            height={50}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            width={50}
            height={50}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            width={50}
            height={50}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            width={50}
            height={50}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  )
}
