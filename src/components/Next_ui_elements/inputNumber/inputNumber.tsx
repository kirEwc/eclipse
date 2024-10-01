import React from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { Number } from '@/icons/Icons'; // Puedes cambiar este icono si lo deseas.

interface NumberInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<NumberInputProps> = ({ name = 'number', onChange, onKeyDown, className = '', ...props }) => {
  
  // Función para manejar la entrada de teclas
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter'];

    // Permitir solo números y las teclas de control
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault(); // Evitar caracteres no numéricos
    }

    // Evitar que se ingresen más de 5 números
    if (target.value.length >= 5 && !allowedKeys.includes(e.key)) {
      e.preventDefault(); // Evitar más de 5 dígitos
    }

    // Si se pasa una función onKeyDown adicional, llamarla también
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <Input      
      name={name}    
      onChange={onChange}  
      onKeyDown={handleKeyDown} 
      placeholder=" X   X   X   X   X" 
      labelPlacement="outside"     
      type="text" 
      startContent={
        <Number className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      className={`max-w-xs ${className}`}
      {...props}
    />
  );
};

export default InputNumber;
