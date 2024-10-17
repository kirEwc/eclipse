import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import InputNumber from "../inputNumber/InputNumber";
import ButtonNext from "../button/ButtonNext";
import { Efectivo, MLC, Real, Zelle } from "@/icons/monedaicons";
import { useState } from "react";

interface Price {
  value: number;
  string: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setaddPrice: React.Dispatch<React.SetStateAction<Price[]>>;
  addPrice?: Price[];
}

export const ModalAddPrice: React.FC<ModalProps> = ({ isOpen, onClose, setaddPrice, addPrice }) => {
  const [prices, setPrices] = useState({
    USD: String(addPrice?.find(price => price.string === 'USD')?.value || ''),
    Zelle: String(addPrice?.find(price => price.string === 'Zelle')?.value || ''),
    MLC: String(addPrice?.find(price => price.string === 'MLC')?.value || ''),
    Real: String(addPrice?.find(price => price.string === 'R$')?.value || ''),
  });

  const handleInputChange = (name: keyof typeof prices, value: string) => {
    setPrices((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Actualizar el estado con los nuevos precios
    setaddPrice([
      {
        value: Number(prices.USD),  // Convertir a número
        string: 'USD',
      },
      {
        value: Number(prices.Zelle),
        string: 'Zelle',
      },
      {
        value: Number(prices.MLC),
        string: 'MLC',
      },
      {
        value: Number(prices.Real),
        string: 'R$',
      },
    ]);

    onClose();
  };

  return (
    <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
      <ModalContent className="relative max-w-md w-full bg-gradient-to-t from-white to-gray-400 rounded-lg transition-transform duration-500 ease-in-out transform shadow-2xl mx-4">
        <ModalHeader className="flex flex-col gap-1">Agrega los Precios:</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputNumber
                name="USD"
                placeholder="efectivo"
                icon={<Efectivo />}
                value={prices.USD}
                onChange={(e) => handleInputChange('USD', e.target.value)}
              />
              <InputNumber
                name="Zelle"
                placeholder="Zelle"
                icon={<Zelle />}
                value={prices.Zelle}
                onChange={(e) => handleInputChange('Zelle', e.target.value)}
              />
              <InputNumber
                name="MLC"
                placeholder="MLC"
                icon={<MLC />}
                value={prices.MLC}
                onChange={(e) => handleInputChange('MLC', e.target.value)}
              />
              <InputNumber
                name="Real"
                placeholder="real"
                icon={<Real />}
                value={prices.Real}
                onChange={(e) => handleInputChange('Real', e.target.value)}
              />
            </div>

            <div className="flex justify-between space-x-2 mt-4">
              <ButtonNext
                text="Cancelar"
                onClick={onClose}
                className="bg-red-500 text-white"
              />
              <ButtonNext
                type="submit"
                text="Agregar"
                className="bg-green-500 text-white"
              />
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
