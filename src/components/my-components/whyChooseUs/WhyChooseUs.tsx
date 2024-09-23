import { F7EllipsesBubbleFill, Fa6SolidPlane, FluentHatGraduationSparkle16Filled, GgPhone, IconParkSolidUpdateRotation, UisPadlock } from "@/icons/Icons";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center">
      
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-4xl font-bold">¿Por que somos <span className="text-blue-500">tu mejor eleccion?</span></h3>
        <p className="text-xl">¡Descubre el universo de posibilidades con Eclipse!</p>
      </div>


      <div className="flex flex-row items-center justify-center mb-8">    

      <div className="flex flex-col items-start mr-4 ml-4 w-1/3 ">

        <div className="flex items-start mb-4 w-full">
          <div >
            <h5 className="font-bold">Experiencia y profesionalismo: </h5>
            <p className="text-sm">Nuestro equipo experto en viajes ofrece las mejores rutas y tarifas personalizadas para ti.</p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3">
            <FluentHatGraduationSparkle16Filled className="text-4xl" />
          </div>

        </div>

        <div className="flex items-start mb-4 w-full">
          <div >
            <h5 className="font-bold">Asociaciones con aerolíneas de prestigio: </h5>
            <p className="text-sm">
              Colaboramos con aerolíneas de prestigio para ofrecerte tarifas competitivas y garantizar tu seguridad en cada vuelo.
            </p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3">
            <Fa6SolidPlane className="text-4xl" />
          </div>          
        </div>

        <div className="flex items-start mb-4 w-full">
          <div >
            <h5 className="font-bold">Soporte al cliente: </h5>
            <p className="text-sm">
              Nuestro equipo de atención al cliente está disponible para resolver cualquier duda o inconveniente en cualquier momento.
            </p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3">
            <GgPhone className="text-4xl" />
          </div>          
        </div>

      </div>


      <div className="relative w-6/12 h-80 hidden lg:block">
        <Image
          src="/images/imagen-centro/imagen-centro.webp"
          alt="NextUI hero Image with delay"
          fill
          sizes="(100px, 100px)"
          priority
          className="object-cover object-center rounded-3xl"
        />
      </div>

      <div className="flex flex-col items-center ml-4 w-1/3 mr-4">
      <div className="flex items-start mb-4 w-full">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4">
            <UisPadlock className="text-4xl" />
          </div>
          <div >
            <h5 className="font-bold">Transacciones seguras: </h5>
            <p className="text-sm">Garantizamos transacciones seguras con tecnología avanzada y métodos de pago confiables, protegiendo siempre tu información personal.</p>
          </div>

        </div>

        <div className="flex items-start mb-4 w-full">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4">
            <F7EllipsesBubbleFill className="text-4xl" />
          </div>          
          <div >
            <h5 className="font-bold">Opiniones de nuestros clientes: </h5>
            <p className="text-sm">
            Nos enorgullece que nuestros clientes tengan experiencias positivas, respaldando nuestra reputación de confiabilidad y servicio excepcional.
            </p>
          </div>
        </div>

        <div className="flex items-start mb-4 w-full">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4">
            <IconParkSolidUpdateRotation className="text-4xl" />
          </div>          
          <div >
            <h5 className="font-bold">Flexibilidad y transparencia: </h5>
            <p className="text-sm">
            Ofrecemos una política flexible de cambios y cancelaciones, con total transparencia en los términos de tus boletos.
            </p>
          </div>
        </div>


      </div>

    </div>
    </div>
  );
}

export default WhyChooseUs;
