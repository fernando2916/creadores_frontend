import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEnvelope } from "react-icons/fa";

export const WorkInfo = ({ vacante }) => {
  return (
    <DialogRoot size="sm" placement="center">
      <DialogTrigger asChild>
        <button className="flex w-full justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center">
          Ver vacante
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[500px] bg-nav-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-btn-50">
            {vacante.puesto}
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className="overflow-y-scroll h-[15rem]">
           
            <div className="">
              <h3 className="text-lg font-semibold">Requisitos</h3>
              <div className="">{vacante.requisitos}</div>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold">Descripción del puesto</h3>
              <div className="">{vacante.descripcion}</div>
            </div>
          </div>

          {/* Formulario */}

          <div className="bg-nav-900 p-5 rounded-lg">
            <div className="flex justify-center items-center">
              <h3 className="text-lg font-semibold text-slate-300">
                Postularme a esta vacante
              </h3>
            </div>
            <form action="" className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="cv"
                  className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  CV Y Portafolío ( .PDF )
                </label>
                <input
                  id='cv'
                  accept='.pdf'
                  type="file"
                  placeholder="Ingresa tu nombre completo"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full file:"
                />
              </div>
                <button
                  type="submit"
                  className="w-full flex justify-center mt-5 py-2 px-4 rounded-lg text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center"
                >
                  <FaEnvelope />
                  Postularme
                </button>
            </form>
          </div>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
