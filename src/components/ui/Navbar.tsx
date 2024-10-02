"use client";

import CorrectMessage from "@/messages/CorrectMessage";
import ErrorMessage from "@/messages/ErrorMessage";
import ApiRequest from "@/services/ApiRequest";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,

} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginDrop from "../Next_ui_elements/Dropdwon/LoginDrop";
import { DropNLogin } from "../Next_ui_elements/Dropdwon/DropNLogin";


export default function Navbar_Main() {
  const { data: session} = useSession();

 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Vuelos Disponibles", href: "/vuelos-disponibles" },
    { label: "Requisitos", href: "/requisitos" },
    { label: "Comentarios", href: "/comentarios" },
  ];



  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="bg-white dark:bg-gray-800 shadow-md sticky">
      <NavbarBrand>
        <div className="flex items-center gap-1">
          {/* logo de la empresa justo en esta linea  */}
          <Link href={"/"} className="flex items-center">
            <Image
              width={50}
              height={50}
              src="/eclipse-logo.svg"
              alt="Eclipse Logo"
            />

            {/* nombre de la empresa  */}
            <h2
              className="text-2xl font-bold text-transparent dark:text-gray-200 transition duration-300">
              <span className="bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Eclipse</span>
            </h2>
          </Link>
        </div>
      </NavbarBrand>

      {/* contenido 2 */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=""
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="text-gray-600  hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="/vuelos-disponibles">
            Vuelos Disponibles
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="/requisitos">
            Requisitos
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="/comentarios">
            Comentarios
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* contenido 3 */}
      <NavbarContent className="hidden md:flex" justify="end">

        
      {!session ? (
        //si no estas autenticado, muestra el dropdown de login
        <DropNLogin  />
      ) : (
        // Si está autenticado, muestra el dropdown de login
        <LoginDrop />
      )}

      </NavbarContent>

      <NavbarMenu className="mt-28">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}