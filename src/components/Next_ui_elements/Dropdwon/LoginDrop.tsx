import { SolarLogoutBroken } from "@/icons/Icons";
import { useAuthStore } from "@/stores/authStore.store";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

// este es el dropdown de login cuando esta logueado, mas abajo esta el dropdown de login cuando no esta logueado
const LoginDrop = () => {

  const { data: session, status } = useSession();
  console.log('status  ' + status);
  console.log('session  ' + session?.user?.email);
  const { user,isAuthenticated,logout } = useAuthStore();
  console.log('DropNLogin  '+user);

/* 
  const { user,isAuthenticated,logout } = useAuthStore();
  // console.log(user);
  const { data: session } = useSession(); */

  const email = session?.user?.email || user?.email

      const handlelogout = async () => {

        if (session!==null) {
         signOut();
        }
        if(isAuthenticated){
          logout();
        }
      };
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered as="button" className="transition-transform" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" textValue="Perfil" className="h-14 gap-2">
            <p className="font-semibold">correo</p>
            <p className="font-semibold">{ email }</p>
          </DropdownItem>

          <DropdownItem key="logout" textValue="Cerrar Seccion" color="danger">
              <button onClick={handlelogout} className=" w-full flex justify-between">
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
