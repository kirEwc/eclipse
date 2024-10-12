"use client";

import { TicketAdmin } from "@/components/my-components/ticketAdmin/TicketAdmin";
import TicketsDate from "@/data/productCard";

const AdminPanel: React.FC = () => {
  return (
    <div className='bg-[url("/images/fondo/2.webp")] bg-cover bg-center bg-no-repeat'>
      <h1 className='text-3xl font-bold text-center bg-transparent mb-8 pt-6'>
        <span className='bg-gradient-to-t from-gray-100 via-slate-300 to-cyan-200 bg-clip-text text-transparent'>
          Administrar Boletos
        </span>
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md md:max-w-lg lg:max-w-6xl mx-auto'>
        {TicketsDate.map((ticket) => (
          <div key={ticket.id} className="rounded-lg p-6 h-full flex justify-center">
            <TicketAdmin 
              id={ticket.id} 
              aeroline={ticket.aeroline}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date}
              price={ticket.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AdminPanel;