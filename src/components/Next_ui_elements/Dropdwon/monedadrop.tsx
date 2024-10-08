import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Efectivo, Zelle, MLC, Real } from "@/icons/monedaicons";
import type { Selection } from "@nextui-org/react";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  price: { value: number; string: PriceIconKey }[]; // Arreglo que contiene los precios
  setMonedaValue: React.Dispatch<React.SetStateAction<number>>;
  setMonedaString: React.Dispatch<React.SetStateAction<string>>;
}

// Definir el tipo para los íconos
type PriceIconKey = "USD" | "Zelle" | "MLC" | "R$";

const priceIcons: Record<PriceIconKey, JSX.Element> = {
  USD: <Efectivo />,
  Zelle: <Zelle />,
  MLC: <MLC />,
  R$: <Real />,
};

export default function MonedaDropdown({ price , setMonedaValue , setMonedaString }: DropdownCustomProps) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set()); // Sin valor por defecto

  const selectedValue = Array.from(selectedKeys)[0] || ""; // Obtiene la moneda seleccionada

  // Obtener el precio y el string correspondiente al valor seleccionado
  const selectedPriceItem = price.find((item) => item.string === selectedValue);
  const selectedPrice = selectedPriceItem ? selectedPriceItem.value : null; // Obtener el valor o null si no se encuentra
  const selectedString = selectedPriceItem ? selectedPriceItem.string : "USD"; // Asegurarte de que sea un PriceIconKey

  // Función para actualizar el valor de la moneda
  setMonedaValue(selectedPrice|| 0);
  setMonedaString(selectedString);


  return (
    <div className="flex items-center justify-center space-x-2">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize ">
            {priceIcons[selectedString]} {/* Muestra el ícono basado en el string */}
            <span className="ml-2">{selectedPrice !== null ? selectedPrice : "Seleccionar método"}</span> {/* Muestra el valor seleccionado o mensaje */}
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
          {price.map(({ value, string }) => (
            <DropdownItem key={string} value={string}> {/* Usa el string como key y value */}
              {priceIcons[string]} {/* Muestra el ícono basado en el string */}
              {string} - {value}  {/* Muestra el valor en palabras y el precio */}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
