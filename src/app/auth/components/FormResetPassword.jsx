'use client'
import Link from "next/link";

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useAuthStore } from "@/hooks/useAuthStore";
import {FaEnvelope} from 'react-icons/fa'
import { Oval } from "react-loader-spinner";
import { useEffect } from "react";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

const resetCodeEmail = {
  email: "",
};

export const RecuperarContraseña = () => {
  const dispatch = useDispatch();
  const { reset_password, errorMessage, loading, status, message } = useAuthStore();

  const resetSubmit = (values) => {
    dispatch(
      reset_password({
        email: values.email,
      })
    );
  };

  const codeEmailSchema = Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("El correo es obligatiorio"),
  });

  useEffect(() => {
     if (status === "correo enviado") {
      Swal.fire({
        icon: "success",
        title: message,
        background: '#120024',
        color: '#ffffff',
  
      })
    }
   }, [status])
  
   useEffect(() => {
     if (status === "Solicitud Fallida") {
      Swal.fire({
        icon: "error",
        title: errorMessage,
        background: '#120024',
        color: '#ffffff',
  
      })
    }
   }, [status])

  return (
    <>
      <div>
        <h2 className="justify-center pb-2 mx-auto font-semibold flex text-2xl">
          Restablece tu contraseña
        </h2>
        <p className="mx-auto text-justify text-sm">
          Ingresa el correo electrónico con el que te regístraste, te enviaremos
          las instrucciones para actualizar tu contraseña.
        </p>
      </div>
      <Formik
        initialValues={resetCodeEmail}
        validationSchema={codeEmailSchema}
        onSubmit={resetSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form className="pt-3 space-y-4" onSubmit={handleSubmit}>
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Correo Electrónico
              </label>
              <input
                type="email"
                disabled={loading}
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errors.email || errorMessage?.message
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                }
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errorMessage?.message}
                {errors.email}
              </p>
            </div>
            {loading ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold disabled:bg-btn-400 dark:bg-btn-600 gap-2 items-center"
              >
                <Oval
                  visible={true}
                  height="30"
                  strokeWidth={4}
                  width="30"
                  color="#fff"
                  secondaryColor="#6e004c"
                  ariaLabel="oval-loading"
                />
              </button>
            ) : (
              <button
              disabled={loading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 text-white gap-2 items-center transition-colors duration-150"
              >
                <FaEnvelope />
                Restablecer contraseña
              </button>
            )}

            <div className="">
              <p className="text-center mt-5 mb-3">
                ¿Aún no tienes cuenta?{" "}
                  <Link href="/auth/crear-cuenta">
                <button disabled={loading} className="text-link-300 hover:text-link-600 dark:hover:text-link-300 dark:text-link-100 disabled:text-link-500 font-bold">
                  Crear cuenta
                </button>
                  </Link>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
