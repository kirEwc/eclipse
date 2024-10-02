
import Link from "next/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
  } from "@nextui-org/react";

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
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <Link className="" href='/login'>Inicia Seccion</Link>
          </DropdownItem>
          
          <DropdownItem key="register"  color="danger">
            <Link color="warning" className="font-semibold" href="/register">
              Inscribirse
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
