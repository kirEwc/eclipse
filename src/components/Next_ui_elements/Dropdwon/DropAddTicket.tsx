import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ReactNode } from "react";

interface DropdownItemProps {
  key: string;
  label: string;
  description?: string;
  shortcut?: string;
  startContent?: ReactNode;
  isDanger?: boolean;
}

interface CustomDropdownProps {
  buttonContent: ReactNode;
  items: DropdownItemProps[];
}

export default function CustomDropdown({ buttonContent, items }: CustomDropdownProps) {
  return (
    <Dropdown className="min-w-40">
      <DropdownTrigger>
        <div className="flex items-center cursor-pointer"> {/* Usando un div con flex y cursor */}
          {buttonContent}
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu" >
        {items.map((item) => (
          <DropdownItem
            key={item.key}
            shortcut={item.shortcut}
            description={item.description}
            startContent={item.startContent}
            className={item.isDanger ? "text-danger" : ""} 
            color={item.isDanger ? "danger" : undefined}
          >
            {item.label}
          </DropdownItem >
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}


/* 

  <div className="ml-auto ">
                            <CustomDropdown buttonContent={ <Option className="w-10 h-10 " />} items={items} />                             
                            </div>




const items = [
    {
      key: "Update",
      label: "Modificar",  
      startContent: <Update  />,
    },
]


*/