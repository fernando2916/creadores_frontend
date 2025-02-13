import { FaSearch } from 'react-icons/fa'

export const Buscador = () => {
  return (
    <form>
    <div>
      <div className="relative rounded-md shadow-sm">
        <input type="text" className="border-2 bg-transparent focus:border-link-100 form-input block w-full sm:text-sm rounded-md transition ease-in-out duration-100 outline-none shadow-sm pr-8 p-2" 
        placeholder="Buscar curso"/>
        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none
    text-secondary-400">
      <FaSearch/>
    </div>
      </div>
    </div>
  </form>
  )
}
