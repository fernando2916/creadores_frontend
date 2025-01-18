
export const Header = () => {
  return (

    <header className="pt-[5rem] w-full bg-gradient-to-r from-nav-800 to-link-800">

    <div className="grid grid-cols-12 max-w-7xl mx-auto m-5 gap-5 place-content-center place-items-center">
        <div className="col-span-full md:col-span-6 space-y-3 text-center md:text-start my-5 p-5">
          <h2 className="text-2xl md:text-3xl">
            ¡Accede a cientos de cursos<br/>
            <span className="text-link-100"> con un solo pago al año!</span>
          </h2>
          <button type="button" className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-2 font-medium mx-auto md:mx-0 ">Conviertete en premium</button>
          <p className="text-sm text-justify">Y aprovecha los increíbles beneficios que tenemos para ti: certificados, cursos ilimitados, material de estudio, cursos en vivo, y mucho más.</p>
        </div>
        <div className="col-span-full md:col-span-6">
          <img src={''} alt="img" className=''/>
        </div>
      </div>
    </header>
  )
}
