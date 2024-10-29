import { FaCircle } from "react-icons/fa";


export const metadata = {
  title: 'Envios'
}

export default function EnviosPage() {
  return (
    <main className="pt-[5rem]">
    <section className="pt-5 max-w-7xl mx-5 lg:mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold uppercase text-center">
          Política de envios
        </h2>
        <div className="bg-cont-100 p-5 my-5 rounded-lg">
          <span className="text-gray-400 font-light">
            Versión vigente: 24 de noviembre, 2023
          </span>
          {/* resumen */}
          <div>
            <h3 className="text-base md:text-xl mt-3">
              Contamos con la empresa de mensajería y paquetería Fedex, DHL, Estafeta misma
              que será la opción por default de envío en el proceso de compra.
            </h3>
            <div className="my-3">
              <p className="font-semibold text-xl">PROCESO:</p>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    Una vez recibido su pedido, el envío tarda en procesarse
                    24-72 horas los días hábiles (lunes a viernes).
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    En caso de realizar un pedido los días viernes, sábado o
                    domingo, se procesará el envío el día lunes, ya que las
                    paqueterías no operan en fin de semana.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify">
                    El número de guía de su pedido estará disponible de 24 a
                    48 horas después de que el pago se haya reflejado en la
                    cuenta bancaria de Emp, y se le enviará vía correo
                    electrónico.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    Los pedidos realizados en sábado, domingo o día festivo, se procesará en el siguiente día hábil.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    En días festivos no se envían pedidos.
                  </p>
                </li>
              </ul>
            </div>
            <div className="my-3">
              <p className="font-semibold text-xl">EXCLUSIÓN DE RESPONSABILIDAD:</p>
              <div className="space-y-2 ml-6">

              <p className="text-justify">En cualquier caso, nuestra empresa no se hace responsable de ninguna demora o condiciones externas que imposibiliten el cumplimiento de fechas estimadas de entrega.</p>
              <p className="text-justify">Cualquier problema en la entrega deberá ser resuelto entre el cliente y la compañía de mensajería, sirviendo Emprendedores sólo como apoyo para facilitar los trámites de reclamación.</p>
              <p className="text-justify">En caso de extravío durante el traslado, Emprendedores no se compromete a reponer al cliente los productos que comprenden el pedido. La mercancía viaja por cuenta y riesgo del comprador.</p>
              <p className="text-justify">Emprendedores se reserva el derecho de utilizar otros medios para entregar sus pedidos en caso de alguna contingencia.</p>
              </div>
            </div>
             <div className="my-3">
              <p className="font-semibold text-xl">ENTREGAS DENTRO DE MÉXICO:</p>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    Simple con una duración aproximada de 3 a 5 días hábiles a partir de que el depósito es reflejado en la cuenta Bancaria de Emprendedores.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                   Express con un tiempo de entrega estimado de 1 a 3 días hábiles a partir de que el depósito es reflejado en la cuenta Bancaria de Emprendedores.
                  </p>
                </li>
              </ul>
            </div>
             <div className="my-3">
              <p className="font-semibold text-xl">ENTREGAS FUERA DE MÉXICO:</p>
              <div>
                <p className="ml-6">El costo del envío será calculado en función del destino en caso de solicitar envío fuera del país (México).</p>
              </div>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                    Simple con una duración aproximada de 3 a 5 días hábiles a partir de que el depósito es reflejado en la cuenta Bancaria de Emprendedores.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div>
                    <FaCircle className="mt-1.5 text-xs" />
                  </div>
                  <p className=" text-justify ">
                  Express con un tiempo de entrega estimado de 1 a 3 días hábiles a partir de que el depósito es reflejado en la cuenta Bancaria de Emprendedores.
                  </p>
                </li>
              </ul>
              <div className="mt-3">
                <p className="text-lg">Aún debemos contemplar que los envios fuera de México, quedan fuera de nuestro control y es posible que los mismos sean tengan retraso en la entrega estimada. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}