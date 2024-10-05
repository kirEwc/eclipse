import React from "react";
import type { SVGProps } from "react";

type Requirement = {
  country: string;
  requirements: string[];
  backgroundImage: string; // Personalización del fondo de la tarjeta
};

export function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none">
        <g filter="url(#f2444id0)">
          <path
            fill="url(#f2444id2)"
            d="m14.442 6.497l-12.66 21.93c-.51.89.13 2.01 1.16 2.01h25.32c1.03 0 1.67-1.11 1.16-2.01l-12.66-21.93c-.52-.89-1.8-.89-2.32 0"
          ></path>
        </g>
        <g fill="#4a4351" filter="url(#f2444id1)">
          <path d="M14.202 22.135a1.4 1.4 0 1 0 2.8-.01v-9.16c0-.77-.62-1.4-1.4-1.4c-.77 0-1.4.62-1.4 1.4zm2.8 3.98a1.4 1.4 0 1 1-2.8 0a1.4 1.4 0 0 1 2.8 0"></path>
        </g>
        <defs>
          <filter
            id="f2444id0"
            width={29.048}
            height={25.008}
            x={1.153}
            y={5.429}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx={-0.45}></feOffset>
            <feGaussianBlur stdDeviation={0.3}></feGaussianBlur>
            <feComposite
              in2="hardAlpha"
              k2={-1}
              k3={1}
              operator="arithmetic"
            ></feComposite>
            <feColorMatrix values="0 0 0 0 1 0 0 0 0.996078 0 0 0 0 0.458824 0 0 0 1 0"></feColorMatrix>
            <feBlend
              in2="shape"
              result="effect1_innerShadow_18590_533"
            ></feBlend>
          </filter>
          <linearGradient
            id="f2444id2"
            x1={15.602}
            x2={15.602}
            y1={5.829}
            y2={30.437}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffd758"></stop>
            <stop offset={1} stopColor="#ffa956"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

const requirementsList: Requirement[] = [
  {
    country: "Guyana",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 24 horas antes del vuelo",
      "Reserva de hostal",
      "Carne de vacunación de la COVID 19",
    ],
    backgroundImage:
      "bg-gradient-to-br from-gray-300 to-blue-500",
  },
  {
    country: "Nicaragua (desde Cuba)",
    requirements: [
      "Pasaporte ",
      "Pasaje ida y vuelta",
      "Retorno emitido 36 horas antes del vuelo",
      "Fiebre Amarilla Internacional (Obligatorio)",
      "Reserva de alojamiento",
    ],
    backgroundImage:
      "bg-gradient-to-br from-gray-300 to-blue-500",
  },
  {
    country: "Nicaragua (desde Brasil y Uruguay)",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 36 horas antes del vuelo",
      "Reserva de alojamiento",
      "Fiebre Amarilla Internacional (Obligatorio)",
    ],
    backgroundImage:
      "bg-gradient-to-tr from-gray-300 to-blue-500",
  },
  {
    country: "Surinam",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 24 horas antes del vuelo",
      'Reserva de alojamiento ',
      "Carne de vacunación de la COVID 19",
      "Visa"
    ],
    backgroundImage:
      "bg-gradient-to-tr from-gray-300 to-blue-500",
  },
];

const TravelRequirements: React.FC = () => {
  return (
    <div className="bg-[url('/images/fondo/awa.webp')] bg-cover bg-center bg-no-repeat">
    <div className="p-6 max-w-6xl mx-auto pt-10 ">
      <h1 className="text-3xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">
        Requisitos para Viajar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {requirementsList.map((item) => (
          <div
            key={item.country}
            className={`p-6 rounded-xl shadow-lg ${item.backgroundImage} transform hover:scale-105 transition-transform duration-500`}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              {item.country}
            </h2>
            <ul className="list-none space-y-3">
              {item.requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start text-black bg-white/20 p-3 rounded-lg backdrop-blur-md hover:bg-white/30 transition-colors duration-300"
                >
                  <span className="text-xl mr-2">✔️</span>
                  <span>{req}</span>
                  {req.includes("Obligatorio") && (
                    <WarningIcon className="ml-2 text-yellow-400" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TravelRequirements;
