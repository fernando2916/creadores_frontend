// import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"





export const WorkModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-3 mt-5">Postularme</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Llenar Solícitud</DialogTitle>
          <DialogDescription>
          Llena tus datos correctamente, para ser contactado de manera corecta, si tienes dudas sobre la protección de tus datos, puedes revisar nuestros 
          <Link href='/terminos' className="ml-2 text-link-100">Terminos y condiciones</Link>          
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-scroll h-[30rem]">
          <form className="space-y-3">
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Ingresa tu Nombre Completo"
                className= "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className= "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Teléfono
              </label>
              <input
                type="phone"
                placeholder="Ingresa tu numero de teléfono"
                className= "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                CV Y Portafolio
              </label>
              <input
                type="file"
                placeholder="Ingresa tu Correo Electrónico"
                className= "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                name="email"
              />
              <p className="text-xs text-slate-400">Ambas cosas en un solo archivo PDF, tamaño máximo: 250k</p>
            </div>
            <div className="">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2">Postularme</button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
