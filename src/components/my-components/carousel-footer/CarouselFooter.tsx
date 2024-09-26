"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const CarouselFooter: React.FC<CarouselProps> = ({ images }) => {
  const [direction, setDirection] = useState(1); // 1 para adelante, -1 para atrás

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
     // slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onReachEnd={() => {
        // Cambiar dirección al alcanzar el final
        setDirection(-1);
        // Retrocede un slide después de alcanzar el final
        setTimeout(() => {
          setDirection(1); // Cambia la dirección a adelante después de un pequeño retraso
        }, 2000); // Tiempo de espera antes de cambiar la dirección
      }}
      onReachBeginning={() => {
        // Cambiar dirección al alcanzar el principio
        setDirection(1);
      }}
      breakpoints={{
        // Breakpoint para pantallas pequeñas
        640: {
          slidesPerView: 1, // Muestra 1 imagen en pantallas pequeñas
        },
        768: {
          slidesPerView: 2, // Muestra 1 imagen en pantallas pequeñas
        },
      
        1024: {
          slidesPerView: 3, // Muestra 3 imágenes en pantallas grandes
        },
        // Breakpoint para pantallas extra grandes
        1280: {
          slidesPerView: 5, // Muestra 5 imágenes en pantallas extra grandes
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-44 my-4"> 
            <Image
              src={image} 
              alt={`Image ${index + 1}`} 
              fill
              priority
              sizes="(50vw, 50vh)"
              className="object-cover object-center rounded-xl"             
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselFooter;
