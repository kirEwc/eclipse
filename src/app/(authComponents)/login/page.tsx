"use client";

import { signIn } from "next-auth/react";

import InputPassword from "@/components/Next_ui_elements/inputPassword/InputPassword";
import InputEmail from "@/components/Next_ui_elements/inputEmail/InputEmail";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import CustomLink from "@/components/my-components/link/Link";
import { Google, User } from "@/icons/Icons";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/messages/ErrorMessage";
import { validationLogin } from "@/app/lib/validation/validationLogin";
import ApiRequest from "@/services/ApiRequest";






const Login: React.FC = () => {
  const router = useRouter();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const { email, password } = Object.fromEntries(formData);

    const validatedFields = validationLogin.safeParse({
      email: email,
      password: password,
    })

    if (!validatedFields.success) {
      const firstError = validatedFields.error.errors[0];
      const messageError = String(firstError.message);
      ErrorMessage(messageError);

    } if (validatedFields.success) {

      try {
        const response = await ApiRequest({
          method: 'POST',
          url: 'https://fbbe-195-181-163-8.ngrok-free.app/api/User/login',
          body: {
            email: email,
            password: password,
          },
        });

        if (response?.status === 200) {
          router.push('/');
        } else {
          ErrorMessage('Credenciales incorrectas');
        }

      } catch (error) {
        console.log(error)
      }

    }


  };


  const handleGoogleLogin = async () => {
    await signIn('google');
  };




  return (
    <div className="h-screen w-screen bg-[url('/images/fondo/1.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center h-full ">
        <div className="border border-t-small border-solid w-80 h-80 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-700 ">
          <div className="flex justify-center mb-4 mt-4">
            <User className="text-5xl text-white opacity-90" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center flex-grow flex-col">
              <div className="mb-4 w-2/3">
                <InputEmail
                  name="email"
                />
              </div>


              <div className="w-2/3">
                <InputPassword
                  name="password"

                />
              </div>

              <div className="mt-3 w-2/3">
                <ButtonNext
                  text="Iniciar sección"
                  type="submit"
                />
              </div>

              <div className="mt-3 w-2/3">
                <ButtonNext
                  icon={<Google className="h-6 w-6" />}
                  text="Iniciar con Google"
                  onClick={handleGoogleLogin}

                >
                </ButtonNext>
              </div>

            </div>
          </form>

          <div className="flex justify-between mt-2 mx-2">
            <CustomLink
              href="/recoveryPassword"
              text="Olvidaste la contraseña"
              className="text-white"
            />
            <CustomLink
              href="/register"
              text="Regístrate"
              className="text-white"
            />
          </div>




        </div>
      </div>
    </div>

  );
};

export default Login;
