import {FaAngleRight} from 'react-icons/fa'
import { DatosContacto } from '../components/DatosContacto'

export default function checkoutPage() {
  return (
    <main className="pt-[5rem]">
          <div className="max-w-7xl mx-auto mt-12 sm:px-6 lg:px-8 px-4 mb-12">
            <h2 className="text-3xl font-semibold mb-2 flex items-center gap-3">
              Carrito de compras 
              <FaAngleRight/>
              Checkout 
              </h2>
              <DatosContacto/>
          </div>
        </main>
  )
}
