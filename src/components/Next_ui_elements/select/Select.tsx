import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEvent } from "react"; // Importar ChangeEvent

// Define el tipo de las props
type CustomSelectProps = {
  options: { key: string; label: string }[]; // Datos de las opciones
  placeholder?: string; // Placeholder opcional
  className?: string; // Clases CSS opcionales
  onChange?: (value: string) => void; // Función opcional para manejar el cambio
  label: string; // Añadir label como prop
};

export default function CustomSelect({
  options,
  placeholder = "Aerolínea",
  className = "w-48 max-w-full",
  onChange,
  label, // Obtener label de las props
  
}: CustomSelectProps) {
  // Manejar el cambio y extraer el valor
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value; // Obtener el valor del evento   
    if (onChange) {
      onChange(value); // Llamar a la función onChange con el nuevo valor
    }
  };

  return (
    <Select
      aria-label={label} // Agregar el atributo aria-label
      placeholder={placeholder}
      className={className}
      onChange={handleChange} // Usar la función handleChange
    >
      {options.map((item) => (
        <SelectItem key={item.key} value={item.key}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
