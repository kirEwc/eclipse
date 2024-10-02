"use client";
import {  IcBaselineWhatsapp, NotoV1Ticket } from "@/icons/Icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Calendar,  Plane } from "lucide-react";
import DropdownCustom from "../Next_ui_elements/Dropdwon/dropdown";
import MonedaDropdown from "../Next_ui_elements/Dropdwon/monedadrop";
import Image from "next/image";
import Link from "next/link";

interface FlightData {
  aeroline?: string;
  from?: string;
  to?: string;
  date?: string[];
  price: [string, { value: number; string: string }][]; // Objeto que contiene los precios
  
}

export  const Ticket2: React.FC<FlightData> = ({
  aeroline = "No Disponible",
  from = "No Disponible",
  to = "No Disponible",
  date = ["No Disponible"],
  price = [["No Disponible", { value: 1, string: "No Disponible" }]],
}: FlightData)=> {

  // await new Promise ((resolve) => setTimeout(resolve, 3000));

  
  
  return (

    <Card className="relative  max-w-md w-full bg-gradient-to-t from-white to-gray-300 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform shadow-2xl">
      <div className="h-3 w-full bg-blue-500"></div>
      {/* Header */}
      <CardHeader className="flex justify-between items-center p-4">

          <div className="flex justify-center items-center ">
          <h1 className="text-2xl font-serif font-bold  mr-2">{aeroline}</h1>
          <Image
            src="/icons8-avión-80.png"
            alt="Airplane"
            width={50}
            height={50}
            className="w-8 h-8"
          />
          </div>

        <NotoV1Ticket className="w-10 h-10 " />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-6 overflow-hidden">
        <div className="flex justify-between items-center">
          {/* Origen */}
          <div className="text-left">
            <p className="text-sm font-medium">Origen</p>
            <p className="text-xl font-bold">{from}</p>
          </div>

          {/* Icono avión */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-px border-t border-dashed"></div>
            <Plane className="w-6 h-6 my-1" />
            <div className="w-16 h-px border-t border-dashed"></div>
          </div>

          {/* Destino */}
          <div className="text-right">
            <p className="text-sm font-medium">Destino</p>
            <p className="text-xl font-bold">{to}</p>
            {/* Destino  */}
          </div>
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="p-4 flex flex-col space-y-3 ">
        {/* Primera fila: Fecha y Hora */}
        <div className="flex flex-col lg:flex-row lg:justify-between w-full items-center">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <Calendar className="w-6 h-6 " />
            <DropdownCustom dateItem={date} />
          </div>
          <div className=" items-center space-x-2">
            <div className="text-2xl font-bold text-gray-800">
              <MonedaDropdown
              price={price}
              />
            </div> 
          </div>
        </div>
        {/* Segunda fila: Precio y add */}
        <div className="flex justify-center items-center w-full space-x-4">
       

          <Link 
          href={`https://wa.me/+5359562875?text=Hola,%20estoy%20interesado%20en%20el%20viaje%20de%20${from}%20a%20${to}%20el%20${date}%20a%20través%20de%20${aeroline}`} 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <button 
          className="flex px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out justify-center items-center"
          >
           <span className="mr-1"> Comprar en</span> <IcBaselineWhatsapp className="w-6 h-6" />
          </button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
