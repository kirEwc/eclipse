import { Ticket2 } from '@/components/ticket/Ticket'
import TicketsDate from '@/data/productCard'


const VuelosDisponibles = () => {
  return (
    <div className='mb-10 px-4'>
      <h1 className='text-3xl font-bold text-center mb-8 mt-6'>Vuelos Disponibles</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {TicketsDate.map((ticket) => (
          <div key={ticket.id} className=" rounded-lg p-6 h-full">
            <Ticket2 
              aeroline={ticket.aeroline}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date}
              time={ticket.time}
              price={ticket.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VuelosDisponibles;

