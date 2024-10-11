"use client";

import ButtonMoney from "@/components/my-components/button/ButtonMoney";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import Calendar from "@/components/Next_ui_elements/calender/Calender";
import InputText from "@/components/Next_ui_elements/inputText/InputText";
import CustomSelect from "@/components/Next_ui_elements/select/Select";
import { dataNameAirline } from "@/data/dataNameAirline";
import { Destination, F7MoneyDollarCircleFill, Fa6SolidPlaneCircleCheck, Fa6SolidPlaneCircleXmark,NotoV1Ticket, Origin, Plane } from "@/icons/Icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DateObject } from "react-multi-date-picker";




const AddTicket: React.FC = () => {
    const router = useRouter();

    const handleSelectChange = (value: string) => {
        const selectedAirline = dataNameAirline.find(airline => airline.key === value);
        console.log('selectedAirline: ', selectedAirline?.label);

    };

    const [selectedDates, setSelectedDates] = useState<DateObject[]>([]);

    const handleCancelTicket = () => {
        router.push('/adminPanel');
    }
    const handleAddTicket = () => {
        const cadena = selectedDates.map(date => date.format("DD/MM/YYYY"));
        console.log(cadena)
    }

    const handleMoney = () => {
        console.log('Precio');
    }


    return (
        <div className="h-screen w-screen bg-[url('/images/fondo/2.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full mx-4 ">
                <div className="relative  max-w-md w-full bg-gradient-to-t from-white to-gray-300 rounded-lg  transition-transform duration-500 ease-in-out transform shadow-2xl mx-4">
                    <div className="h-3 w-full bg-black"></div>
                    <div className="w-full h-5/12 ">

                        <div className="flex  items-center justify-between py-3 mx-2">
                            <div>
                                <Plane className="w-10 h-10 my-1 ml-4" />
                            </div>

                            <div >
                                <CustomSelect
                                    options={dataNameAirline}
                                    onChange={handleSelectChange}
                                    label="Select an airline"
                                />                               
                            </div>

                            <div >
                                <NotoV1Ticket className="w-10 h-10 " />
                            </div>
                        </div>


                        <div className="py-3 mx-4 ">
                            <div className="flex justify-between space-x-2">
                                <div className="w-48">
                                    <InputText name="origin" placeholder="Origen" icon={<Origin />} />
                                </div>

                                <div className="w-48">
                                    <InputText name="destination" placeholder="Destino" icon={<Destination />} />
                                </div>
                            </div>
                        </div>

                        <div className="py-3 mx-4 ">
                            <div className="flex justify-between space-x-2">

                                <div className="w-48">
                                    <Calendar
                                        selectedDates={selectedDates}
                                        onChange={setSelectedDates}
                                        placeholder="Fecha(s)"

                                    />
                                </div>

                                <div className=" w-48">
                                      <ButtonMoney
                                        icon={<F7MoneyDollarCircleFill className="h-7 w-7 ml-2" />}
                                        text="Precios"
                                        onClick={handleMoney}                                        
                                        className="bg-white w-full h-10"
                                    />                     

                                </div>
                            </div>                          
                        </div>

                        


                        <div className="py-3 mx-4 flex flex-col space-y-3 ">
                            <div className="flex justify-between space-x-2">
                                <div >
                                    <ButtonNext
                                        icon={<Fa6SolidPlaneCircleXmark className="h-7 w-7" />}
                                        text="Cancelar"
                                        onClick={handleCancelTicket}
                                        className="bg-red-500 text-white"

                                    >
                                    </ButtonNext>
                                </div>

                                <div>
                                    <ButtonNext
                                        icon={<Fa6SolidPlaneCircleCheck className="h-7 w-7" />}
                                        text="Agregar"
                                        onClick={handleAddTicket}
                                        className="bg-green-500 text-white"

                                    >
                                    </ButtonNext>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>


            </div>

        </div>

    );

}

export default AddTicket;