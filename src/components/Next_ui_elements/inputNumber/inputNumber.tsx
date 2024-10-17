import React from 'react';
import { Input, InputProps } from '@nextui-org/react';

interface NumberInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  icon?: React.ReactNode; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<NumberInputProps> = ({ 
  name = 'number', 
  onChange, 
  icon, 
  ...props 
}) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permitir solo números, Backspace, Delete, Tab, y las teclas de flecha
    const validKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Enter',  // Puedes permitir Enter si quieres
    ];
    
    if (
      !validKeys.includes(e.key) && 
      (e.key < '0' || e.key > '9') // Solo permitir números
    ) {
      e.preventDefault(); // Evitar que se ingrese el carácter no válido
    }
  };

  return (
    <Input      
      name={name}          
      onChange={onChange}  
      onKeyDown={handleKeyDown} // Añadir el manejador de evento
      placeholder=" X   X   X   X   X" 
      labelPlacement="outside"     
      type="text" 
      startContent={icon} 
      className={`max-w-xs`} 
      {...props}
    />
  );
};

export default InputNumber;
