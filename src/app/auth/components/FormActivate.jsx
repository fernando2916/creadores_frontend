'use client'

import { useAuthStore } from "@/hooks/useAuthStore";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'


export const ActivacionDeCuenta = () => {
  const { verify, message, errorMessage, status, loading } = useAuthStore();
  const [verification_code, setVerification_Code] = useState('')
  const params = useParams()
  const id = params.id

  const handleChange = (verification_code) => {
    setVerification_Code(verification_code)
 }

 const handleComplete = (verification_code) => {
    verify({
      id,
      verification_code
    });
 };

 useEffect(() => {
   if (status === "Activada") {
    Swal.fire({
      icon: "success",
      title: message,
      background: '#120024',
        color: '#ffffff',

    })
  }
 }, [status])

 useEffect(() => {
   if (status === "activacion nula") {
    Swal.fire({
      icon: "error",
      title: errorMessage,
      background: '#120024',
      color: '#ffffff',

    })
  }
 }, [status])


 useEffect(() => {
   if (status === "Activada") {
     redirect('/auth/ingresar');
  }
 }, [status])
 
  return (
    <div>
      <div>
        <h2 className="text-center p-3 mb-5 text-xl font-bold">Activar cuenta</h2>
      </div>
      <div className="text-center space-x-2">
        <form>
          <div className="flex justify-center items-center gap-5">
            <PinInput size='lg' name='verification_code' value={verification_code} onChange={handleChange} onComplete={handleComplete}>
              <PinInputField _disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2  outline-none placeholder:text-[#120024]"/>
              <PinInputField disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField disabled={loading} className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
            </PinInput>
          </div>
        </form>
      </div>
      <Link href='/auth/resetear-codigo'>
      <button
        disabled={loading}
        className="flex gap-2 font-semibold text-xl items-center mx-auto bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 disabled:bg-btn-600 dark:hover:bg-btn-600 text-white p-2 transition-colors rounded-md mt-10"
        type="submit"
        >
        Solicitar nuevo código
      </button>
        </Link>
    </div>
  );
}
