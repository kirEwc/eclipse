'use client'
import { Avianca, NotoV1Ticket } from '@/icons/Icons'
import { Card, CardBody, CardFooter, CardHeader, } from '@nextui-org/react'
import { Calendar, Clock,  Plane } from 'lucide-react'
import DropdownCustom from '../Dropdwon/dropdown'

export async function Ticket2 () {

  
  // const [selectedDate, setSelectedDate] = useState(flightData.dates[0])

//   await new Promise ((resolve) => setTimeout(resolve, 3000));

  return (
    <Card className="relative  max-w-md w-full bg-white rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:focus: shadow-2xl">
      <div className='h-3 w-full bg-blue-500'>

      </div>
      {/* Header */}
      <CardHeader className="flex justify-between items-center p-4">
        <div className='flex justify-center items-center '>
        <h1 className="text-3xl font-serif font-bold  mr-2">
        Avianca
        </h1>
            <Avianca className="w-8 h-8 " />
        </div>
        <NotoV1Ticket className="w-10 h-10 " />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-6 overflow-hidden">
  <div className="flex justify-between items-center">
    {/* Origen */}
    <div className="text-left">
      <p className="text-sm font-medium">Origen</p>
      <p className="text-2xl font-bold">Habana</p>
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
      <p className="text-2xl font-bold">Nicaragua</p>{/* Destino  */}
    </div>
  </div>
</CardBody>


      {/* Footer */}
      <CardFooter className="p-4 flex flex-col space-y-3 ">
  {/* Primera fila: Fecha y Hora */}
  <div className="flex justify-between w-full items-center">
    <div className="flex items-center space-x-2">
      <Calendar className="w-6 h-6 " />
        <DropdownCustom/>
    </div>
    <div className="flex items-center space-x-2">
      <Clock className="w-6 h-6 " />
      <p className=" font-semibold">11:30 AM</p>
    </div>
  </div>
  <div>
  </div>



</CardFooter>



    </Card>
  )
}
