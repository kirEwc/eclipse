import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  dateItem: string[]; // Un array de strings para las fechas
}

export default function DropdownCustom({ dateItem }: DropdownCustomProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["Fechas Disponibles"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select a date"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {/* Mapear el array dateItem para generar las opciones del Dropdown */}
        {dateItem.map((date) => (
          <DropdownItem key={date}>
            {date}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
