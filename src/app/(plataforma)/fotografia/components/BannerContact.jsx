import { AgendarModal } from "./AgendarModal"

export const BannerContact = () => {
  return (
    <>
      <section className="bg-slate-300 dark:bg-cont-100 max-w-7xl p-5 lg:mx-auto my-10">
        <h3 className="text-center text-4xl font-semibold pt-3">
          Agendar sesión
        </h3>
        <div className="p-10 grid grid-cols-12 gap-5">
          <div className="col-span-full md:col-span-6">
            <p className="text-lg font-medium">
              Una manera muy fácil y sencilla para agendar y/o cotizar tu sesión fotografíca.
            </p>
          </div>
          <div className="col-span-full md:col-span-6">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center text-2xl font-semibold mb-3">
                Cotiza agenda tú sesión en el siguiente enlace
              </h2>
              <AgendarModal/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
