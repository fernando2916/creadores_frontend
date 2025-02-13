'use client'


import { Footer } from "@/components/navegacion/footer";
import { Header } from "@/components/navegacion/header";

import { FaAngleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";



export default function({children}) {
  return (
    <>

      <Header/>
        <ScrollToTop 
          smooth 
          component={<FaAngleUp/>} 
          className="!rounded-full !bg-btn-400 !text-xl !font-semibold !p-3 !right-7 !bottom-7 !shadow-none !z-50 !shadow-transparent !flex items-center"/>
        {children}
      <Footer/>
    </>
  );
}