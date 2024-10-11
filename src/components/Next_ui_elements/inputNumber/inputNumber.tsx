import React from 'react';
import { Input, InputProps } from '@nextui-org/react';

interface NumberInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode; // Permitir pasar un ícono personalizado como prop
}

const InputNumber: React.FC<NumberInputProps> = ({ 
  name = 'number', 
  onChange, 
  onKeyDown, 
  className = '', 
  icon, // Icono dinámico pasado como prop
  ...props 
}) => {
  
  // Función para manejar la entrada de teclas
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter'];

    // Permitir solo números y las teclas de control
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault(); // Evitar caracteres no numéricos
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
      startContent={icon} // Usar el icono pasado como prop
      className={`max-w-xs ${className}`}
      {...props}
    />
  );
};

export default InputNumber;
