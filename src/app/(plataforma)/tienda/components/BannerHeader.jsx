import Image from "next/image"

export const BannerHeader = () => {
  return (
    <div className="pt-[5rem]">
    <div className="relative overflow-hidden bg-slate-300 dark:bg-cont-100">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              El verano finalmente están aquí
            </h1>
            <p className="mt-4 text-xl ">
              Este año, nuestra nueva colección de verano te protegerá de los
              duros elementos de un mundo al que no le importa. si vives o
              mueres.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt="imagen previa"
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md px-8 py-3 text-center font-medium bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 duration-150 transition-colors"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
