'use client'

import { Politicas } from "@/components/modales/politicas-modal"
import { Formik } from "formik"
import { FaEnvelope } from "react-icons/fa"
import { useDispatch } from "react-redux"

import * as Yup from 'yup'

const ContactoFormFields = {
  nombre: '',
  correo: '',
  telefono:'',
  mensaje:'',
}


export const FormularioContacto = () => {
  const dispatch = useDispatch();

  const contactSubmit = (values) => {
    dispatch (
      console.log({
        nombre: values.name,
        correo: values.email,
        telefono: values.phone,
        mensaje: values.mensaje,
      })
    )
  }

  const contactSchema = Yup.object({
    name: Yup.string()
      .min(3, 'El nombre es muy corto')
      .max(15, 'El nombre es muy largo')
      .required('El nombre es obligatorio'),
    email: Yup.string()
      .email('El correo no es válido')  
      .required('El correo es obligatorio'),  
    phone: Yup.string()
      .min(10, 'El teléfono debe contener al menos 10 dígitos')  
      .max(12, 'El teléfono no debe contener más de 12 dígitos')  
      .matches(/^[0-9]+$/, 'Solo se permiten números')  
      .required('El teléfono es obligatorio'),
    mensaje: Yup.string()
      .required('El mesaje es obligatorio')  
  })

  return (
    <>
    <div className="w-full md:w-1/2 flex flex-col md:px-5 mt-5">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formulario de contacto
        </h3>
        <p className="mt-2 md:text-base text-gray-200 text-xs lg:flex">
          ¿Tienes un proyecto en mente? Cuéntanos tu idea y estaremos
          encantados de ayudarte.
        </p>
      </div>
      <div className="mt-5">
        <Formik initialValues={ContactoFormFields} onSubmit={contactSubmit} validationSchema={contactSchema}>
          {({values, errors, handleChange, handleSubmit}) => (


        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              placeholder="Nombre Completo"
              id='name'
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              className={
                errors.name
                  ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                  : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              }
            />
            <p className="text-sm text-red-400 font-semibold">
                {errors.name}
              </p> 
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Ingresa tu Correo Electrónico"
              className={
                errors.email
                  ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                  : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              }
            />
            <p className="text-sm text-red-400 font-semibold">
                {errors.email}
              </p> 
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm " htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              placeholder="Negocio o independiente"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="phone">
              Teléfono de Contacto
            </label>
            
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Numero de Contacto"
              className={
                errors.phone
                  ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                  : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              }
            />
            <p className="text-sm text-red-400 font-semibold">
                {errors.phone}
              </p> 
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="mensaje">Mensaje</label>
            <textarea
              id="message"
              cols="38"
              rows="6"
              name="mensaje"
              value={values.mensaje}
              onChange={handleChange}
              error={errors.mensaje}
              className={
                errors.mensaje
                  ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                  : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              }
              placeholder="Escribenos tus dudas..."
            />
            <p className="text-sm text-red-400 font-semibold">
                {errors.mensaje}
              </p> 
          </div>
          <p className="">Puedes revisar el <Politicas/> si tienes dudas con el manejo de tus datos personales.</p>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-btn-400 hover:bg-btn-600 px-3.5 py-2.5 mt-5 text-center text-sm font-semibold duration-150 shadow-sm uppercase transition-colors"
          >
            <FaEnvelope />
            Solicitar más Información
          </button>
        </form>
          )}

        </Formik>

      </div>
    </div>
  </>
  )
}
