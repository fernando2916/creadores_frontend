'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { MenuPrincial } from "./menu-principal"
import { MenuMobile } from "./menu-mobile"
import { MenuIcons } from "./menu-icons"
import { MenuAccount } from "./menu-account"
import { useAuthStore } from "@/hooks/useAuthStore"

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {status, loading} = useAuthStore()

  return (
    <header className="flex justify-between w-full items-center p-4 bg-nav-900 fixed w-ful z-50">
        
        <div>
            <Link href='/'>
            <Image
            src='/icono emprende.png'
            alt="logo emprendedores"
            className="w-auto h-auto"
            width={33}
            height={33}
            />
            </Link>
        </div>
        <div className="md:hidden -order-1 md:order-none">
            <MenuMobile onClick={toggleMenu} showMenu={showMenu} auth={status}/>
        </div>
        <div className="hidden md:flex">
            <MenuPrincial/>
        </div>
        <div>
        {status === 'Authenticado' ? (
            <MenuIcons />
          ) : (
            <MenuAccount />
          )}
        </div>

    </header>
  )
}
