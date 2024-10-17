"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";


import {
  FaFacebook,
  FaGoogle,
  FaLock,
  FaLockOpen,
  FaSignInAlt,
} from "react-icons/fa";

import { Terminos } from "@/components/modales/terminos-modal";
import { Politicas } from "@/components/modales/politicas-modal";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "@/hooks/useAuthStore";

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
      .required("El email es obligatorio"),
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
      redirect('/auth/activacion-en-espera');
   }
  }, [status])

  return (
    <>
      <div>
        <h2 className="text-center mb-5 text-3xl font-bold">Crea una cuenta</h2>
      </div>
      <Formik initialValues={registerFormFields} onSubmit={registerSubmit} validationSchema={registerSchema}>
      {({ values, errors, handleChange, handleSubmit, handleReset}) => (
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
                type="text"
                placeholder="Ingresa tu Nombre "
                className={
                  errors.name
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
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
                type="text"
                placeholder="Ingresa tu apellido "
                className={
                  errors.lastName
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
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
                id="correo"
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errorMessage || errors.email
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
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
                  id="contraseña"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa una contraseña"
                  className={
                    errors.password
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full"
                      : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
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
                  id="confirmar contraseña"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Repite la contraseña"
                  className={
                    errors.password2
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full"
                      : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
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
            {/* <div className="flex items-center gap-2 justify-center">
                <input type="checkbox" name="" id="" className="w-4 h-4 accent-btn-200" />
              <Terminos />
            </div>
            <div className="flex items-center gap-2 justify-center">
                <input type="checkbox" name="" id=""className="w-4 h-4 accent-btn-200"/>
              <Politicas />
            </div>  */}
            <p className="text-[15px] py-1 w-full text-start">
              Al hacer click en Crear cuenta, indicas que leíste y aceptas los
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
                  disabled
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-600 gap-2"
                >
                  <p>Cargando...</p> 
                  {/* <Oval
                    visible={true}
                    height="30"
                    strokeWidth={4}
                    width="30"
                    color="#fff"
                    secondaryColor="#6e004c"
                    ariaLabel="oval-loading"
                  /> */}
                </button>
              ) : (
                <button
                // onClick={handleReset}
                  type="submit"
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-cente"
                >
                  <FaSignInAlt />
                  Crear Cuenta
                </button>
              )}
          </div>
          <div>
            <p className="text-center ">
              ¿Ya tienes una cuenta?
              <button className="text-link-100 font-bold ml-2">
                <Link href="/auth/ingresar">Ingresar</Link>
              </button>
            </p>
          </div> 
      </form>
      )}      
      </Formik>
      <div className="bg-btn-600 p-[1px] relative mt-10">
        <span className="absolute justify-center translatex-1/2 flex items-center bg-nav-800 rounded-md px-6 -top-[11px] left-[17%] sm:left-[23%]">
          O Crea tu cuenta con
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <Button>
          <FaGoogle className="text-xl" />
        </Button>
        <Button>
          <FaFacebook className="text-xl" />
        </Button>
      </div>
    </>
  );
}
