'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import {FaLockOpen, FaLock, FaUser} from 'react-icons/fa';
import { useAuthStore } from "@/hooks/useAuthStore";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { Oval } from "react-loader-spinner";


const loginFormFields = {
  email:    "",
  password: "",
};

export const Ingresar =() => {

  const [showPassword, setShowPassword] = useState(false);

  const { startLogin, errorMessage, message, status, loading } =
  useAuthStore();


  const dispatch = useDispatch();

  const loginSubmit = (values) => {
    dispatch(startLogin({
      email: values.email,
      password: values.password,
    }));
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  useEffect(() => {
    if (status === "Authenticated") {
        Swal.fire({
          icon: "success",
          title: message,
          background: '#120024',
        color: '#ffffff',
    
        })
      }
  }, [status])

  
  useEffect(() => {
    if (status === "Authenticated") {
       redirect('/');
    }
  }, [status])

  
  return (
    <>

    <div>
      <h2 className="text-center mb-5 text-3xl font-bold">
        Ingresa a tu cuenta
      </h2>
    </div>
    <Formik
        initialValues={loginFormFields}
        onSubmit={loginSubmit}
        validationSchema={loginSchema}

      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
        }) => (

          <form className="pt-3 space-y-5" noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Correo Electrónico
              </label>
              <input
                disabled={loading}
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errors.email || errorMessage
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                }
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errorMessage}
                {errors.email}
              </p>
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Contraseña</label>
              <div className="relative">
                <input
                  disabled={loading}
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa una contraseña"
                  className={
                    errors.password
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full placeholder:text-black dark:placeholder:text-gray-400"
                      : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                  }
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <button
                disabled={loading}
                  type="button"
                  className="absolute right-3 top-3 text-xl outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>
              <p className="text-sm text-red-400 font-semibold">
                {errors.password}
              </p>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className=" flex items-center gap-1">
                <input type="checkbox" className="w-4 h-4 accent-btn-200 dark:accent-btn-400" />
                <p id="recordar">Recordarme</p>
              </div>
              <Link
                href="/auth/resetear-contrasena"
                className="text-sm text-link-300 hover:text-link-600 dark:hover:text-link-300 dark:text-link-100"
              >
                ¿Olvidaste tu Contraseña?
              </Link>
            </div>
            <div>
              {loading ? (
                <button
                  type="submit"
                  disabled={status}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white disabled:bg-btn-400 dark:bg-btn-600 gap-2 items-center"
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
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 transition-all ease-in gap-2 items-center"
                >
                  <FaUser />
                  Entrar a mi cuenta
                </button>
              )}
            </div>
            <div className=" border-t border-gray-500">
              <p className="text-center mt-5">
                ¿No tienes una cuenta?{" "}
                  <Link href="/auth/crear-cuenta">
                <button disabled={loading} type="button" className="text-link-300 hover:text-link-600 dark:hover:text-link-300 dark:text-link-100 disabled:text-link-500 font-bold">
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