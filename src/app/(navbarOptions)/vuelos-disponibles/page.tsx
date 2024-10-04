import { Ticket2 } from '@/components/ticket/Ticket'
import TicketsDate from '@/data/productCard'

type TicketType = {
  id: string;
  aeroline: string;
  from: string;
  to: string;
  date: string;
  price: [string, { value: number; string: string }]; // El tipo de price
};

const VuelosDisponibles: React.FC<TicketType> = () => {
  return (
    <div className='bg-[url("/images/fondo/fondo_boletos.webp")] bg-cover bg-center bg-no-repeat'>
      <h1 className='text-3xl font-bold text-center bg-transparent mb-8 pt-6'>
        <span className='bg-gradient-to-t from-black via-blue-600 to-blue-800 bg-clip-text text-transparent'>Vuelos Disponibles</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {TicketsDate.map((ticket) => (
          <div key={ticket.id} className=" rounded-lg p-6 h-full">
            <Ticket2 
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
};

export default VuelosDisponibles;

