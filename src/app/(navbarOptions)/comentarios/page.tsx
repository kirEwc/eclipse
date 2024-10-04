'use client';
import StarComponent from "@/components/my-components/Star/StarComponent";
import ModalCustom from "@/components/Next_ui_elements/Modal/Modal";
import { ProiconsNoteAdd, Star } from "@/icons/Icons";
import { Avatar, Button, Card, CardBody, CardFooter, Progress, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";

export const Comentarios = () => {
  const [averageRating, setAverageRating] = useState(4.2);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const reviews = [
    {
      id: "1",
      user: { name: "Alice", avatar: "/images/fondo/1.webp" },
      rating: 5,
      comment: "Excellent product, very satisfied with the purchase.",
      date: "2024-06-01",
    },
    {
      id: "2",
      user: { name: "Bob", avatar: "/images/fondo/1.webp" },
      rating: 4,
      comment: "Good product, but shipping took longer than expected.",
      date: "2024-05-28",
    },
    {
      id: "3",
      user: { name: "Charlie", avatar: "/images/fondo/1.webp" },
      rating: 5,
      comment: "Incredible quality, I definitely recommend it.",
      date: "2024-05-25",
    },
    
  ];

  return (
    <>
      <h2 className="flex text-2xl justify-center items-center mt-4 mb-3 font-bold">Comentarios de nuestros clientes</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mx-36">
        {/* componente de rating general */}
        <div className="flex items-center mb-6">
          <div className="text-4xl font-bold mr-4">
            {averageRating.toFixed(1)}
          </div>
          <div>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <Progress
              size="sm"
              aria-label="Progreso de carga"
              value={averageRating * 20}
              className="max-w-md"
              color="warning"
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Button
            variant="shadow"
            className="bg-gradient-to-tr from-blue-100 via-slate-300 to-purple-100 justify-center items-center"
            onClick={() => (onOpen())}
          >
            <ProiconsNoteAdd 
            className="w-6 h-6" 
            aria-labelledby="icono de agregar comentario"
            />
            Agregar Comentario
          </Button>
          <ModalCustom isOpen={isOpen} onClose={onClose} />
        </div>
      </div>

      {/* Recuro de comentarios con scroll */}
      <div
  className="flex flex-col justify-start h-96 items-center w-9/12 mx-auto mb-8 bg-gray-200 rounded-lg overflow-y-scroll"
  aria-labelledby="Lista de comentarios de clientes"
>
  {/* Caja de comentarios */}
  <div className="flex flex-col md:w-2/3">
    {reviews.map((review, index) => (
      <Card key={review.id} className={`mb-4 ${index === 0 ? 'mt-4' : ''}`}>
        <CardBody>
          <div className="flex items-center mb-2">
            <Avatar
              src={review.user.avatar}
              size="sm"
              className="mr-2"
            />
            <span className="font-semibold">{review.user.name}</span>
            <StarComponent Nstar={review.rating} />
          </div>
          <p>{review.comment}</p>
        </CardBody>
        <CardFooter>
          <small className="text-gray-500">{review.date}</small>
        </CardFooter>
      </Card>
    ))}
  </div>
</div>

    </>
  );
};

export default Comentarios;
