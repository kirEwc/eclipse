import { useState } from "react";

// Define el tipo de las props
type CustomSelectProps = {
  options: { key: string; label: string }[]; // Datos de las opciones
  placeholder?: string; // Placeholder opcional
  className?: string; // Clases CSS opcionales
  onChange?: (value: string) => void; // Función opcional para manejar el cambio
  label?: string; // Añadir label como prop
  value?: string; // Prop para establecer el valor seleccionado
};

export default function SelectAirline({
  options,
  placeholder = "Aerolínea",
  onChange,
  value = "", // Valor por defecto
}: CustomSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>(value);



  // Manejar el cambio y extraer el valor
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value; // Obtener el valor del evento
    setSelectedValue(newValue); // Actualizar el estado del valor seleccionado
    if (onChange) {
      onChange(newValue); // Llamar a la función onChange con el nuevo valor
    }
  };

  return (
    <div className={`relative w-52`}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="mt-1 block w-full rounded-xl shadow-sm hover:cursor-pointer p-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}