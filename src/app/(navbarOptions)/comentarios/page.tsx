'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Comentarios = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      avatar: '/icons8-avión-80.png',
      date: '27 de Septiembre, 2024',
      comment: 'Excelente servicio, los vuelos siempre a tiempo y muy cómodos.',
    },
    {
      id: 2,
      name: 'María López',
      avatar: '/icons8-avión-80.png',
      date: '25 de Septiembre, 2024',
      comment: 'El proceso de reserva fue muy sencillo y el personal fue muy amable.',
    },
    {
      id: 3,
      name: 'Carlos Díaz',
      avatar: '/icons8-avión-80.png',
      date: '22 de Septiembre, 2024',
      comment: 'Una experiencia maravillosa. Sin duda, volveré a utilizar sus servicios.',
    },
    {
      id: 4,
      name: 'Ana Torres',
      avatar: '/icons8-avión-80.png',
      date: '20 de Septiembre, 2024',
      comment: 'Todo fue perfecto. La atención al cliente fue excelente.',
    },
    {
      id: 5,
      name: 'Luis Gómez',
      avatar: '/icons8-avión-80.png',
      date: '18 de Septiembre, 2024',
      comment: 'Me encantó la facilidad para hacer las reservas. Recomendado.',
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const currentDate = new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });

      const newCommentObj = {
        id: comments.length + 1,
        name: 'Anónimo', // Aquí podrías agregar lógica para capturar el nombre del usuario real
        avatar: '/icons8-avión-80.png',
        date: currentDate, // Obtiene la fecha actual
        comment: newComment,
      };

      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  return (
    <>
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 m-4 text-center">
      Comentarios de nuestros clientes
    </h2>
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg transition-all duration-300 flex flex-col md:flex-row gap-8">
  
  {/* Contenedor de comentarios con scroll */}
  <div className="w-full md:w-2/3 max-h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">

    <div className="space-y-6">
      {comments.map(({ id, name, avatar, date, comment }) => (
          <div
          key={id}
          className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          >
          <Image
            src={avatar}
            alt={`Avatar de ${name}`}
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-600"
            width={48}
            height={48}
            />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {name}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {date}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-1 text-base leading-relaxed">
              {comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Formulario para agregar nuevo comentario */}
  <div className="w-full md:w-1/3">
    <form onSubmit={handleCommentSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Deja tu comentario
      </h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        rows={6}
        placeholder="Escribe tu comentario aquí..."
        className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300"
        ></textarea>
      <button
        type="submit"
        className="mt-4 w-full bg-cyan-600 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-cyan-700 transition-colors duration-300"
        >
        Enviar
      </button>
    </form>
  </div>
</div>
          </>

  );
};

export default Comentarios;
