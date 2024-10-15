"use client";
import {  Button, Card, CardBody,  CardFooter,  CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, } from "@nextui-org/react";
import { Calendar, Plane } from "lucide-react";
import Image from "next/image";

import CustomDropdown from "@/components/Next_ui_elements/Dropdwon/DropAddTicket";

import { Delete, Option, Update } from "@/icons/Icons";
import ErrorMessage from "@/messages/ErrorMessage";
import CorrectMessage from "@/messages/CorrectMessage";
import ApiRequest from "@/services/ApiRequest";

import { useRouter } from "next/navigation";
import { Efectivo, MLC, Real, Zelle } from "@/icons/monedaicons";
import { ticketStore } from "@/stores/ticketStore.store";



interface FlightData {
    id: string;
    aeroline: string;
    from: string;
    to: string;
    date: string[];
    price: { value: number, string: string }[];
}





export const TicketAdmin: React.FC<FlightData> = ({
    id,
    aeroline = "No Disponible",
    from = "No Disponible",
    to = "No Disponible",
    date = ["No Disponible"],
    price = [{ value: 1, string: "No Disponible" }],
}: FlightData) => {
    const router = useRouter();
    const  setFlightData = ticketStore((state) => state.setTicketData);


    const ticket = { id, aeroline, from, to, date, price };

    const items = [
        {
            key: "Update",
            label: "Modificar",
            startContent: <Update />,
            onClick: () => handleUpdate(ticket)
        },
        {
            key: "delete",
            label: "Eliminar",
            startContent: <Delete className="text-danger" />,
            isDanger: true, // Esta propiedad es la que activará el color peligroso
            onClick: () => handleDelete(id)
        },
    ];


    const handleUpdate = async (ticket: FlightData) => {
        setFlightData(ticket);
        router.push(`/updateTicket`);
    };



    const handleDelete = async (ticketId: string) => {
        try {
            const response = await ApiRequest({
                method: 'POST',
                url: 'https://fbbe-195-181-163-8.ngrok-free.app/api/User/login',
                body: {
                    id: ticketId,
                },
            });


            if (response?.status === 200) {
                CorrectMessage('Boleto eliminado');
            } else {
                ErrorMessage('Error al eliminar el boleto');
            }

        } catch (error) {
            // console.log(error)
        }

    };
  
    type PriceIconKey = "USD" | "Zelle" | "MLC" | "R$";

    const priceIcons: Record<PriceIconKey, JSX.Element> = {
        USD: <Efectivo className="w-5 h-5" />,
        Zelle: <Zelle className="w-5 h-5" />,
        MLC: <MLC className="w-5 h-5" />,
        R$: <Real className="w-5 h-5" />,
    };


    return (

        <Card className="relative sm:max-w-lg md:max-w-md w-full bg-gradient-to-t from-white to-gray-300 rounded-lg shadow-2xl">
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

                <CustomDropdown buttonContent={<Option className="w-10 h-10 " />} items={items} />
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


            <CardFooter className="p-4 flex flex-col space-y-3">
          
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-around w-full space-y-4 sm:space-y-0 sm:space-x-1">

                  
                    <div className="flex w-full sm:w-auto justify-center sm:justify-start items-center sm:-ml-2 md:-ml-0">
                    {/* dropdown Fechas actualizado para solo ver datos y no poder utilizarlos */} 
                    <Dropdown className="w-full sm:w-auto">
                        <DropdownTrigger>
                            <Button variant="bordered" className="capitalize">
                            <span className="flex flex-row items-center gap-5">
                            { <Calendar /> }
                            { 'Seleccionar Fecha' }
                            </span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Select a date"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                        >
                            {/* Mapear el array dateItem para generar las opciones del Dropdown */}
                            {date.map((date) => (
                            <DropdownItem key={date} className="flex items-center justify-between w-full" value={date}>
                            <div className="flex items-center space-x-2">
                                {<Calendar />}
                                <span>{date}</span>
                            </div>
                            </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                        
                    </div>

                   
                    <div className="flex w-full sm:w-auto justify-center sm:justify-start items-center text-2xl mr-2 font-bold text-gray-800">
                    {/* dropdown money actualizado para solo ver datos y no poder utilizarlos */} 
                    <div className="flex items-center justify-center space-x-2">
                            <Dropdown>
                                <DropdownTrigger>
                                <Button variant="bordered" className="capitalize  min-w-[140px] max-w-[200px] truncate">
                                    <span className="flex w-full justify-between items-center ml-1 mr-1">
                                        {<Efectivo className="w-5 h-5"/>}
                                    <span className="ml-2">{"Seleccionar método"}</span>
                                    </span>

                                </Button>
                                </DropdownTrigger>

                                <DropdownMenu
                                aria-label="Select a currency"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                >
                                {price.map(({ value, string }) => (
                                    <DropdownItem key={string} textValue="item" value={string}> {/* Usa el string como key y value */}
                                    {priceIcons[string as PriceIconKey]} {/* Muestra el ícono basado en el string */}
                                    {string} - {value}  {/* Muestra el valor en palabras y el precio */}
                                    </DropdownItem>
                                ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>


            </CardFooter>


        </Card>
    );
}
