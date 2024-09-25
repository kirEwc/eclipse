import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  price: { [key: string]: number }; // Objeto que contiene los precios
}

export default function MonedaDropdown({ price }: DropdownCustomProps) {
  const priceItems = Object.entries(price); // Convertir el objeto a un array de entradas [clave, valor]
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["efectivo"])); // Valor por defecto

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  // Obtener el precio correspondiente al valor seleccionado
  const selectedPrice = price[selectedValue] || 0;

  return (
    <>
    <div className="flex items-center justify-center space-x-2">
      <span className="text-xl font-bold text-gray-800">
        {selectedPrice}
      </span>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Select a currency"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          >
          {/* Mapear el array priceItems para generar las opciones del Dropdown */}
          {priceItems.map(([currency, value]) => (
            <DropdownItem key={currency} value={currency}>
              {currency} - ${value} {/* Mostrar el valor en palabras y el precio */}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
          </>
  );
}
