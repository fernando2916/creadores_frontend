"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { Oval } from "react-loader-spinner";

import {
  FaLock,
  FaLockOpen,
  FaSignInAlt,
} from "react-icons/fa";

import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "@/hooks/useAuthStore";
import { Terminos } from "@/components/modales/terminos-modal";
import { Politicas } from "@/components/modales/politicas-modal";

const registerFormFields = {
  name:       "",
  last_name:  "",
  email:      "",
  password:   "",
  password2:  "",
};

export const Registro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const dispatch = useDispatch();
  const { startRegister, errorMessage, message, loading, status } =
  useAuthStore();

  const registerSubmit = (values) => {
    dispatch(
      startRegister({
        name: values.name,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        password_confirmation: values.password2,
      })
    );
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(10, "El nombre es muy largo")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(3, "El apellido es muy corto")
      .max(15, "El apellido es muy largo")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El correo no es válido")
      .required("El correo es obligatorio"),
    password: Yup.string()
      .min(
        8,
        "La contraseña debe tener al menos 8 caracteres, un símbolo y un numero"
      )
      .matches(/[0-9]/, "la contraseña debe tener al menos un número")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "la contraseña debe tener al menos un símbolo !@#$%^&*(),."
      )
      .required("La contraseña es obligatoria"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "La contraseña no coincide")
      .required("La confirmación de la contraseña es obligatoria"),
  });

  useEffect(() => {
    if (status === "Registrado") {     
      Swal.fire({
        icon: "success",
        title: message,
        background: '#120024',
        color: '#ffffff',
      })
   }
  }, [status])

  useEffect(() => {
    if (status === "Fallo el registro") {     
      Swal.fire({
        icon: "error",
        title: errorMessage,
        background: '#120024',
        color: '#ffffff',
        text: "Si eres tú, presiona el boton ingresar para iniciar sesión correctamente, de lo contrario se bloqueara la cuenta a la que intentas ingresar."
      })
   }
  }, [status])

  useEffect(() => {
    if (status === "Registrado") {     
      redirect('/auth/activacion-en-espera');
   }
  }, [status])


  return (
    <>
      <div>
        <h2 className="text-center mb-5 text-3xl font-bold">Crea una cuenta</h2>
      </div>
      <Formik initialValues={registerFormFields} onSubmit={registerSubmit} validationSchema={registerSchema}>
      {({ values, errors, handleChange, handleSubmit}) => (
        <form className="pt-3 space-y-3" noValidate onSubmit={handleSubmit}>
          <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="nombre"
              >
                Nombre
              </label>

              <input
                id="nombre"
                disabled={loading}
                type="text"
                placeholder="Ingresa tu Nombre "
                className={
                  errors.name
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                }
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errors.name}
              </p> 
          </div>

          <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                id="apellido"
                disabled={loading}
                type="text"
                placeholder="Ingresa tu apellido "
                className={
                  errors.lastName
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                }
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errors.lastName}
              </p>
          </div>
          <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="correo"
              >
                Correo Electrónico
              </label>
              <input
              disabled={loading}
                id="correo"
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errorMessage || errors.email
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
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                disabled={loading}
                  id="contraseña"
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
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password}
                </p>
              </div>
          </div>
          <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="confirmar contraseña"
              >
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                disabled={loading}
                  id="confirmar contraseña"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Repite la contraseña"
                  className={
                    errors.password2
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full placeholder:text-black dark:placeholder:text-gray-400"
                      : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                  }
                  name="password2"
                  value={values.password2}
                  onChange={handleChange}
                  error={errors.password2}
                />
                <button
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <FaLockOpen /> : <FaLock />}
                </button>
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password2}
                </p>
              </div>
          </div>
           <div className="justify-start flex flex-col items-start">
            <p className="text-[15px] py-1 w-full text-start">
              Al crear tú cuenta, indicas que leíste y aceptas los
              <Terminos />
              <span >
              y el
              </span>
              <Politicas />
              <span className="font-bold">
              de Emprendedores Creativos.
              </span>
            </p>
          </div>
          <div>
           {loading ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white disabled:bg-btn-400 dark:bg-btn-600 gap-2"
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
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold text-white bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 transition-all ease-in gap-2"
                >
                  <FaSignInAlt />
                  Crear Cuenta
                </button>
              )}
          </div>
          <div>
            <p className="text-center ">
              ¿Ya tienes una cuenta?
              <Link href="/auth/ingresar">
              <button 
              disabled={loading} 
              className="text-link-300 hover:text-link-600 dark:text-link-100 dark:hover:text-link-300 disabled:text-link-500 font-bold ml-2">
                Ingresar
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
