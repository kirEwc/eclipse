
import Link from "next/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
  } from "@nextui-org/react";
import { SolarLoginBroken } from "@/icons/Icons";

//este es el dropdown de login cuando no esta logueado
export const DropNLogin = () => {
    

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform cover "
            src="/UserLoginSVG.svg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="solid">
          <DropdownItem key="login" textValue="Iniciar Seccion" className="h-14 gap-2">
          <Link href='/login' className="flex justify-around">
              <button className="w-full h-full flex items-start">
              Inicia Seccion                
            </button>
            <SolarLoginBroken className="w-6 h-6"/>
          </Link>
          </DropdownItem>
          
          <DropdownItem key="register" textValue="Registrarse" color="default">
          <Link href='/register'>
              <button className="w-full h-full flex items-start">
              Registrarse                
            </button>            
          </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
