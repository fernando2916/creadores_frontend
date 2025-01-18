import {
    FaCircle,
    // FaHandshake,
    FaLaptop,
    FaQuoteLeft,
    FaQuoteRight,
    FaToolbox,
    FaCode,
    FaCheck,
  } from "react-icons/fa";

  import { FaShield } from "react-icons/fa6";
import { Items2 } from "./Items";
import Image from "next/image";
import { InfoSection } from "./InfoSection";


export const Infodiseño = () => {
  return (
    <>
    <section className="my-10 space-y-5">
          <div className="mx-5 lg:mx-auto lg:container flex justify-center text-center text-xl md:text-4xl ">
            Somos diseñadores con experiencia en creación de marca, fotografía,
            diseño web, editorial, entre otras, con más de 5 años de
            experiencia.
          </div>
          <div className="mx-5 lg:mx-auto lg:container pt-10 flex text-justify justify-center text-xl ">
            <div>
              En{" "}
              <span className="text-link-100">
                Emprendedores Creativos&copy;
              </span>{" "}
              hemos desarrollado un proceso creativo para crear marcas únicas,
              nos encargamos de implementar de forma integral toda la
              comunicación visual en los diferentes medios digitales e impresos,
              aumentando con ello el reconocimmiento de la marca y la atracción
              de clientes potenciales.
            </div>
          </div>
        </section>
        <InfoSection
          className='bg-cont-100'
          title={"Comunicación visual en la actualidad"}
          img={<Image src='/diseñadora.svg' alt="imagen ilustrativa" width={500} height={500} />}>
          <p className="text-justify mt-10 text-lg">
            Digamos por ejemplo que se encuentra con la necesidad de comunicar
            un mensaje, ¿de qué forma lo comunicaría? Puede ir contándoselo
            persona a persona, transmitirlo en alto con un megáfono o emitirlo
            por la radio para que llegue a más receptores. En este caso estaría
            utilizando la comunicación verbal. Pero ¿y si para comunicar ese
            mismo mensaje utiliza como medio un cartel, un folleto o un anuncio
            en la prensa?
            <span className="font-semibold mx-1">
              Entonces estaría utilizando un tipo de comunicación visual
              denominada diseño gráfico.
            </span>
            El diseño gráfico informa, atrae la atención, organiza, convence,
            estimula, identifica, localiza, diferencia, pero sobre todo, el
            diseño gráfico comunica visualmente un mensaje.
          </p>
          <p className="text-justify mt-10 text-lg">
            La verdadera finalidad del diseño gráfico es satisfacer una
            necesidad previa de comunicación, de transmisión de mensajes a un
            receptor por medio de signos visuales. En todo proceso de
            comunicación aparecen tres elementos básicos:
            <span className="font-semibold mx-1">
              un emisor, un mensaje y un receptor.
            </span>
            En comunicación gráfica, el emisor es la empresa o individuo que
            quiere transmitir un mensaje concreto a sus clientes o congéneres,
            que en este caso son los receptores.
          </p>
        </InfoSection>
        <InfoSection
          style="order-last"
          title={"Profesionales en Diseño Gráfico en México"}
          img={<Image src='/diseñador.svg' alt="imagen ilustrativa" height={500} width={500} />}>
          <p className="text-justify mt-10 text-lg">
            Ya sea que esté buscando lanzar un nuevo negocio o simplemente un
            rebrand existente,
            <span className="font-semibold mx-1">
              el diseño gráfico es esencial para el éxito.
            </span>
            Puede comenzar con
            <span className="font-semibold mx-1">
              una imagen cautivadora que capturará la atención de sus usuarios
            </span>
            y conduzca a una página de destino bien diseñada o fotos de
            productos. También conduce a un correo electrónico de seguimiento,
            publicaciones sociales, infografías y más. Estos son solo algunos de
            los muchos beneficios de contratar una agencia de diseño gráfico
            profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-5">
            <div className="mt-5">
              <FaToolbox className="text-7xl my-5" />
              <h3 className="text-2xl font-bold">Diseño Gráfico</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Identidad Corporativa
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Imagen Corporativa
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Etiquetas y Empaques
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Señalética
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Tipografía
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaShield className="text-7xl my-5" />
              <h3 className="text-2xl font-bold">Diseño Editorial</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Revistas Digitales / Impresas
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Folletos
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Dípticos / Tripticos
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Posters Profesionales
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Copy Creativo
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaLaptop className="text-7xl my-5" />
              <h3 className="text-2xl font-bold">Diseño Web</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Página de aterrizaje
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Comercio Electrónico
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Aplicaciones Móviles
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Sitios Empresariales
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Rediseño de Páginas
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <FaCode className="text-7xl my-5" />
              <h3 className="text-2xl font-bold">Desarrollo web</h3>
              <ul className="p-2.5 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Autenticación de Ususarios
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Publicación de Blog
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Pasarela de Pagos
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Formulario de Contacto
                </li>
                <li className="flex items-center gap-2">
                  <FaCircle className="text-[6px] text-link-500" />
                  Despliegue en Servidores
                </li>
              </ul>
            </div>
          </div>
        </InfoSection>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto p-5 mt-10 max-w-7xl">
            <p className="text-justify p-2 text-xl lg:mx-10">
              Un diseñador gráfico profesional puede desarrollar una identidad
              visual única para su negocio. Trabajarán en estrecha colaboración
              con usted para desarrollar una representación visual de su marca.
              Incorporarán colores, formas e imágenes en su narrativa para crear
              una impresión duradera con su audiencia. Ya sea que necesite un
              logo simple para aumentar la visibilidad o una estrategia de marca
              compleja, puede estar seguro de que un diseñador gráfico obtendrá
              el trabajo. Si necesita un logotipo personalizado creado para su
              negocio, comuníquese con los diseñadores gráficos de Creative
              Studio®.
            </p>
            <p className="text-justify p-2 text-xl lg:mx-10">
              Además de crear diseños atractivos para medios de impresión y
              digital, los diseñadores gráficos pueden crear imágenes
              impresionantes para el entretenimiento. Esto incluye carteles de
              películas, cubiertas de DVD, programas de escenario y novelas. La
              animación, la tipografía y el video se pueden usar en los gráficos
              de movimiento, también. También pueden crear materiales impresos
              con pantalla para la venta. Por lo tanto, si necesita crear un
              folleto, folleto o una cubierta de DVD, o algo completamente
              diferente, los diseñadores gráficos son la respuesta.
            </p>
          </div>
        </section>

        <section className="py-5 flex items-center bg-cont-100">
          <div className="max-w-7xl mx-auto">

          <div className="flex flex-col  p-10 w-full justify-center items-center mx-auto">
            <h2 className="text-4xl font-semibold text-center">
              Lo que nuestros clientes dicen:
            </h2>
            <p className="text-center flex p-5 gap-2 items-center md:text-3xl font-semibold">
              <FaQuoteLeft className="text-5xl font-bold text-link-100" />
              Día a día a hacemos lo que más nos gusta y nos inspira: Trabajar
              en las mejores ideas de negocio.
              <FaQuoteRight className="text-5xl font-bold text-link-100" />
            </p>
          </div>
          </div>
        </section>
        <section className="my-10 ">
          <div className="text-center justify-center">
            <h3 className="text-4xl font-semibold mx-14">
              Por qué deberías elegirnos como tu agencia de diseño
            </h3>
            <p className="pt-2 mx-10 mb-10 text-gray-100">
              Encontraremos las mejores alternativas para que tu marca tenga ese
              impacto que estás buscando para tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center text-center gap-8 max-w-7xl mx-auto flex-shrink">
            {Items2.map((item) => (
              <div key={item.title}>
                <div className="flex flex-col space-y-5">
                  <span className="justify-center items-center flex text-6xl py-5">
                    {item.icon}
                  </span>
                  <h2 className="text-xl font-medium ">{item.title}</h2>
                  <p className="mx-5 text-lg text-justify text-gray-100">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 px-8 mx-auto items-center bg-cont-100">
          <div className=" text-center max-w-4xl mx-auto">
            <p className="mt-2 font-bold tracking-tight text-5xl leading-none">
              Precios de nuestros paquetes de diseño.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-100">
            Hemos armado 3 paquetes que cumplen tus necesidades desde las
            básicas hasta los complementos impresos.
          </p>
          <div className="grid my-10 gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-max-7xl container mx-auto">
            {/* BASICO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-link-100 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">Básico</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md border-2 border-btn-400 hover:border-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
            {/* Emprendedor */}
            <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-link-100 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">Básico</h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                El paquete ideal para iniciar tu idea de negocios. Comienza con
                una imagen impactante y construye relaciones de negocio con una
                excelente primera impresión.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $3,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md border-2 border-btn-400 hover:border-btn-600 transition-colors duration-150 px-3 py-2 text-center text-LG font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
            {/* INTERMEDIO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-4 ring-link-100 bg-nav-900 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100 ">
                  Premium
                </h3>
                <p className="rounded-full bg-nav-700 px-3 py-1 text-xs">
                  Más Popular
                </p>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                Nuestro paquete premium está diseñado para cubrir las áreas más
                necesarias de comunicación y diseño. Si eres un emprendedor con
                visión a futuro, o quieres darle ese gran impulso a tu marca o
                empresa ya existente, este paquete es para ti.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $10,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150 px-3 py-2 text-center text-lg font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>

            {/* PRO */}
            <div className="rounded-3xl p-8 xl:p-10 ring-1 ring-link-100 ">
              <div className=" flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8 text-link-100">
                  Emprendedor
                </h3>
              </div>
              <p className="mt-5 text-xs leading-6 text-justify text-gray-100">
                Si buscas iniciar un negocio en forma, o incluso rediseñar la
                imagen que ya tenías, este paquete es ideal para quienes buscan
                ir más lejos.
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  $7,000.00
                </span>
                <span className="text-xs font-semibold leading-6">MXN</span>
              </p>
              <button className="mt-6 rounded-md border-2 border-btn-400 hover:border-btn-600 transition-colors duration-150 px-3 py-2 text-center text-lg font-semibold leading-6 w-full">
                Comprar ahora
              </button>
              <ul className="text-xs leading-6 xl:mt-10 mt-8" role="list">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-link-100" />
                  25 products
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}
