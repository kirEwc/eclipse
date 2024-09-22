'use client'
import { Plane, MapPin, Calendar, Clock } from 'lucide-react'
import { Ticket2 } from './Ticket2'

export default function VintageTicket() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100 p-4">
      <div
        className="relative w-full max-w-md bg-amber-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 "
        style={{
          boxShadow: '0 0 20px rgba(120, 53, 15, 0.3)',
        //   backgroundImage: "url('data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E')",
        }}
      >
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30"></div> */}
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-30"></div> */}
        
        <div className="relative p-6 space-y-6">
            {/* card header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-serif font-bold text-amber-800">AIR VOYAGE</h1>
            <Plane className={`w-8 h-8 text-amber-700 transition-all duration-500 `} />
          </div>
          
          {/* card body */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-medium text-amber-700">From</p>
              <p className="text-2xl font-bold text-amber-900">PARIS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-amber-600 border-t border-dashed"></div>
              <Plane className="w-6 h-6 text-amber-700 mx-auto my-1" />
              <div className="w-16 h-px bg-amber-600 border-t border-dashed"></div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-amber-700">To</p>
              <p className="text-2xl font-bold text-amber-900">CAIRO</p>
            </div>
          </div>
          
          {/* card footer */}
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-amber-800">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <p>15 AUG 2024</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <p>11:30 AM</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <p>GATE 7</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-amber-700 flex items-center justify-center text-amber-100 font-bold text-xs">
                S
              </div>
              <p>12A</p>
            </div>
          </div>



        </div>
        
        {/* <div className="relative p-4 bg-amber-300 border-t border-amber-400">
          <p className="text-amber-800 font-medium">Passenger</p>
          <p className="text-amber-900 text-xl font-bold font-serif">AMELIA EARHART</p>
          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-900">
              <path d="M30,1h40l29,29v40l-29,29h-40l-29-29v-40z M31,3h38l28,28v38l-28,28h-38l-28-28v-38z" />
              <path d="M31,3l28,28h38v38l-28,28h-38l-28-28v-38z M29,1l-29,29v40l29,29h40l29-29v-40l-29-29z" />
            </svg>
          </div>
        </div> */}
      </div>

      <Ticket2/>
    </div>
  )
}