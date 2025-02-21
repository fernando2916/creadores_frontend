'use client'

import { useEffect, useState } from "react";
import { FaCheck, FaLock, FaLockOpen } from "react-icons/fa";

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useAuthStore } from "@/hooks/useAuthStore";
import { redirect, useParams } from "next/navigation";


import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { Oval } from "react-loader-spinner";

const newPasswordChange = {
  password: "",
  password2: "",
};


export const FormPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const distpatch = useDispatch();
  const params = useParams();

  const { new_password, errorMessage, message, status, loading } =
    useAuthStore();
  const id = params.id;

  const newPassword = (values) => {
    distpatch(
      new_password({
        id,
        password: values.password,
        password_confirmation: values.password2,
      })
    );
  };

  const newPasswordSchema = Yup.object({
    password: Yup.string()
      .min(
        8,
        "La contraseña debe tener al menos 8 caracteres, un símbolo y un numero"
      )
      .matches(/[0-9]/, "la contraseña debe tener al menos un número")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "la contraseña debe tener al menos un símbolo"
      )
      .required("La contraseña es obligatoria"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "La contraseña no coincidie")
      .required("La confirmación de la contraseña es obligatoria"),
  });

  useEffect(() => {
       if (status === "Contraseña Actualizada") {
        Swal.fire({
          icon: "success",
          title: message,
          background: '#120024',
          color: '#ffffff',
    
        })
      }
     }, [status])

  useEffect(() => {
    if (status === "Contraseña Actualizada") {
      redirect("/auth/ingresar");
    }
  }, [status]);
  return (
    <div className="">
      <h2 className="text-center mb-5 text-3xl font-bold">Nueva Contraseña</h2>
      <p className="mx-auto p-3 text-justify text-sm">
        Ingresa tu nueva contraseña para que puedas acceder nuevamente a tu
        cuenta.
      </p>
      <Formik
        initialValues={newPasswordChange}
        onSubmit={newPassword}
        validationSchema={newPasswordSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form className="pt-3 space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 relative">
              <div className=" flex flex-col space-y-2">
                <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                  disabled={loading}
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa una contraseña"
                    className={
                      errors.password
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                    }
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                  />
                  <button
              disabled={loading}

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
                <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <input
                  disabled={loading}
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Repite la contraseña"
                    className={
                      errors.password2
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                    : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                    }
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    error={errors.password2}
                  />
                  <button
              disabled={loading}

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
            </div>
            {loading ? (
              <button
              disabled={loading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold disabled:bg-btn-400 dark:bg-btn-600 gap-2 items-center"
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 transition-all ease-in gap-2 items-center"
              >
                <FaCheck />
                Confirmar contraseña
              </button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}
