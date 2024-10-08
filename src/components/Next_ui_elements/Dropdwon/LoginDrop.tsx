<<<<<<< HEAD
import { IcOutlineAdminPanelSettings, SolarLogoutBroken } from "@/icons/Icons";
=======
import { deleteAuthCookies } from "@/app/actions/deleteAuthCookies";
import { SolarLogoutBroken } from "@/icons/Icons";
>>>>>>> c7bf5369b16c5ac15a7ee131879608cc4fa7f2a6
import { useAuthStore } from "@/stores/authStore.store";
import { signOut, useSession } from "next-auth/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
<<<<<<< HEAD
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
=======
>>>>>>> c7bf5369b16c5ac15a7ee131879608cc4fa7f2a6

// este es el dropdown de login cuando esta logueado, mas abajo esta el dropdown de login cuando no esta logueado
const LoginDrop = () => {
  const { data: session } = useSession();
  const { user, isAuthenticated, logout } = useAuthStore();

<<<<<<< HEAD
  /* 
  const { user,isAuthenticated,logout } = useAuthStore();
  // console.log(user);
  const { data: session } = useSession(); */
=======
  const { data: session } = useSession();
  const { user,isAuthenticated,logout } = useAuthStore();

>>>>>>> c7bf5369b16c5ac15a7ee131879608cc4fa7f2a6

  const email = session?.user?.email || user?.email;

  const handlelogout = async () => {
    if (session !== null) {
      signOut();
    }
    if (isAuthenticated) {
      logout();
    }
  };

  // Función para generar el avatar de la persona
  function generateAvatarImage(text: string): string {
    const firstLetter = text.charAt(0).toUpperCase(); // Obtener la primera letra y convertirla a mayúscula

    const backgroundColor = "#06402B"; // Color de fondo del avatar

    const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <rect width="100" height="100" fill="${backgroundColor}" />
            <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="40" fill="white" font-family="Arial" dy=".1em">
              ${firstLetter}
            </text>
          </svg>`;

    return `data:image/svg+xml;base64,${btoa(svg)}`; // Convertir el SVG a base64 para usarlo como src
  }

  // crear la url de la imagen de avatar
  const avatarSrc = generateAvatarImage(email || "avatar");

<<<<<<< HEAD
=======
        if (session!==null) {
         signOut();
        }

        console.log('isAuthenticated',isAuthenticated)
        if(isAuthenticated){
          logout();    
          await deleteAuthCookies();
        }
      };
>>>>>>> c7bf5369b16c5ac15a7ee131879608cc4fa7f2a6
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform cover"
            src={avatarSrc}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" textValue="Perfil" className="h-14 gap-2">
            <p className="font-bold">Inicio seccion:</p>
            <p className="font-semibold">{email}</p>
          </DropdownItem>

          {/* seccion del panel de control */}

            {user && user.role === "admin" ? (
              <DropdownItem key="Admin" textValue="Panel de control">
                <Link href="/adminPanel" className="flex justify-around">
                  <button className="w-full flex justify-between">
                    Panel de Control
                    <IcOutlineAdminPanelSettings className="w-6 h-6" />
                  </button>
                </Link>
              </DropdownItem>
            ) : (
              <DropdownItem className="w-0 h-0 -mb-3"></DropdownItem>
            )}

          <DropdownItem key="logout" textValue="Cerrar Seccion" color="danger">
            <button
              onClick={handlelogout}
              className=" w-full flex justify-between"
            >
              Cerrar sesión
              <SolarLogoutBroken className="w-6 h-6" />
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LoginDrop;
