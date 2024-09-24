import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

export default function DropdownCustom() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["Fechas Disponibles"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const dropdownItems = [
    '2024-09-23',
    '2024-09-24',
    '2024-09-25',
    '2024-09-26',
    '2024-09-27'
  ];

  return (
    <Dropdown>
    <DropdownTrigger>
      <Button 
        variant="bordered" 
        className="capitalize"
      >
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
      {dropdownItems.map(date => (
        <DropdownItem key={date}>
          {date}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </Dropdown>
  );
}
