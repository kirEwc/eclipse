"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar_Main() {


  return (
    <Navbar shouldHideOnScroll className="bg-white dark:bg-gray-800 shadow-md sticky">
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
        className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition duration-300">
            Equipo Eclipse
        </h2>
        </Link>
        </div>
      </NavbarBrand>
      
     {/* contenido 2 */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
      <NavbarItem className="text-gray-600  hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
          Vuelos Disponibles
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
          Requisitos
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-500 transition duration-300">
          <Link color="foreground" href="#">
           Comentarios
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* contenido 3 */}
      <NavbarContent className="hidden sm:flex" justify="end">
        

        

        

        

      </NavbarContent>
      
    </Navbar>
  );
}