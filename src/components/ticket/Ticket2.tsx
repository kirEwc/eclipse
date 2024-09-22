import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { Calendar, Clock, MapPin, Plane } from 'lucide-react'
import React from 'react'

export const Ticket2 = () => {
  return (
    <Card className="relative w-full max-w-md bg-amber-200 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      
      {/* Header */}
      <CardHeader className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-serif font-bold text-amber-800">AIR VOYAGE</h1>
        <Plane className="w-8 h-8 text-amber-700" />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-6">
        <div className="flex justify-between items-center">
          {/* Origen */}
          <div className="text-left">
            <p className="text-sm font-medium text-amber-700">From</p>
            <p className="text-2xl font-bold text-amber-900">PARIS</p>
          </div>

          {/* Icono avión */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-px bg-amber-600 border-t border-dashed"></div>
            <Plane className="w-6 h-6 text-amber-700 my-1" />
            <div className="w-16 h-px bg-amber-600 border-t border-dashed"></div>
          </div>

          {/* Destino */}
          <div className="text-right">
            <p className="text-sm font-medium text-amber-700">To</p>
            <p className="text-2xl font-bold text-amber-900">CAIRO</p>
          </div>
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="p-4 flex flex-col space-y-3 bg-amber-200">
  {/* Primera fila: Fecha y Hora */}
  <div className="flex justify-between w-full items-center">
    <div className="flex items-center space-x-2">
      <Calendar className="w-4 h-4 text-amber-700" />
      <p className="text-amber-800 font-medium">15 AUG 2024</p>
    </div>
    <div className="flex items-center space-x-2">
      <Clock className="w-4 h-4 text-amber-700" />
      <p className="text-amber-800 font-medium">11:30 AM</p>
    </div>
  </div>

  {/* Segunda fila: Puerta y Asiento */}
  <div className="flex justify-between w-full items-center">
    <div className="flex items-center space-x-2">
      <MapPin className="w-4 h-4 text-amber-700" />
      <p className="text-amber-800 font-medium">GATE 7</p>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5 rounded-full bg-amber-700 flex items-center justify-center text-amber-100 font-bold text-xs">
        S
      </div>
      <p className="text-amber-800 font-medium">12A</p>
    </div>
  </div>
</CardFooter>



    </Card>
  )
}
