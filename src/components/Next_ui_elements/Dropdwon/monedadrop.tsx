import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { Efectivo, Zelle, MLC, Real } from "@/icons/monedaicons";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  price: [string, { value: number; string: string }][]; // Objeto que contiene los precios
}

// Definir el tipo para los íconos
type PriceIconKey = "efectivo" | "zelle" | "mlc" | "real";

const priceIcons: Record<PriceIconKey, JSX.Element> = {
  efectivo: <Efectivo />,
  zelle: <Zelle />,
  mlc: <MLC />,
  real: <Real />,
};

export default function MonedaDropdown({ price }: DropdownCustomProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set()); // Sin valor por defecto

  // Obtener el valor seleccionado como un array
  const selectedValue = Array.from(selectedKeys)[0] || ""; // Obtiene la moneda seleccionada

  // Obtener el precio y el string correspondiente al valor seleccionado
  const selectedPriceItem = price.find(([currency]) => currency === selectedValue);
  const selectedPrice = selectedPriceItem ? selectedPriceItem[1].value : null; // Obtener el valor o null si no se encuentra
   const selectedString = selectedPriceItem ? selectedPriceItem[1].string as PriceIconKey : "efectivo"; // Asegurarte de que sea un PriceIconKey

  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="text-xl font-bold text-gray-800">
        {selectedPrice !== null ? selectedPrice : ""} {/* Mostrar el precio seleccionado o un " " si no hay selección */}
      </span>

      <Dropdown >
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize flex items-center">
            {priceIcons[selectedString]} {/* Muestra el ícono basado en el string */}
            <span className="ml-2">{selectedValue || "Seleccionar método"}</span> {/* Muestra el valor seleccionado o mensaje */}
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
          {/* Mapear el array price para generar las opciones del Dropdown */}
          {price.map(([currency, { value, string }]) => (
            <DropdownItem key={currency} value={currency}>
              {priceIcons[string as PriceIconKey]} {/* Muestra el ícono basado en el string */}
              {currency} - {value}  {/* Muestra el valor en palabras y el precio */}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
