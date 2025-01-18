'use client'

import {   DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,} from "@/components/ui/dialog"
import { Rating } from "@/components/ui/rating"

export const ModalComent = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <button className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 mx-1 px-3 py-2 rounded-lg">Opinar</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-nav-800">
        <DialogHeader>
          <DialogTitle>Deja tu opinión</DialogTitle>
        </DialogHeader>
        <DialogBody>

        <div className="overflow-y-scroll h-[30rem]">
            <Rating allowHalf colorPalette='purple' />            
            <form>
              <div>
                <label htmlFor=""></label>
                <textarea 
                id="message"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                cols="48"
                rows="6"
                name="messaje"
                placeholder="Deja tu comentario..."
              ></textarea>
              </div>

            </form>

            </div>
        </DialogBody>

      </DialogContent>
    </DialogRoot>
  )
}
