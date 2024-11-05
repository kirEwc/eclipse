import React from 'react';
import { Ticket2 } from '@/components/my-components/ticket/Ticket';
import TicketsDate from '@/data/productCard';

// Actualizamos TicketType para que coincida con la estructura de TicketsDate
interface TicketType {
  id: string;
  aeroline: string;
  from: string;
  to: string;
  date: string[]; // Cambiado a string[]
  price: { value: number; string: string }[]; // Cambiado a un array de objetos
}

const VuelosDisponibles: React.FC = () => {
  return (
    <div className='bg-[url("/images/fondo/1.webp")] bg-cover bg-center bg-no-repeat'>
      <h1 className='text-3xl font-bold text-center bg-transparent mb-8 pt-6'>
        <span className='bg-gradient-to-t from-gray-100 via-slate-300 to-cyan-200 bg-clip-text text-transparent'>
          Vuelos Disponibles
        </span>
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md md:max-w-lg lg:max-w-6xl mx-auto'>
        {TicketsDate.map((ticket: TicketType) => (
          <div key={ticket.id} className="rounded-lg p-6 h-full flex justify-center">
            <Ticket2 
              id={ticket.id}
              aeroline={ticket.aeroline}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date} // Pasamos el array como está
              price={ticket.price} // Pasamos el array de precios
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VuelosDisponibles;
