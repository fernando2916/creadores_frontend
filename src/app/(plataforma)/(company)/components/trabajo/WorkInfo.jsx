// import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"



export const WorkInfo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-3 mt-5">Ver Vacante</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Vacante completa</DialogTitle>
          <DialogDescription>
          
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-scroll h-[30rem]">
          <div className="">
            <h3 className="">Vacante</h3>
          </div>
          <div className="">
            <h3 className="">Especificaciones</h3>
          </div>
          <div className="">
            <h3 className="">Requisitos</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
