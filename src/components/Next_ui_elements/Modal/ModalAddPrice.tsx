import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,} from "@nextui-org/react";
import InputNumber from "../inputNumber/InputNumber";



interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddPrice: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    
    
  return (
    <>
      <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agrega los Precios:</ModalHeader>
              <ModalBody>
                <div className="flex flex-row gap-1">
                    <div className="flex flex-col gap-1">
                        <InputNumber placeholder="efectivo" />
                        <InputNumber  placeholder="Zelle"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputNumber  placeholder="MLC"  />
                        <InputNumber placeholder="real"/>
                    </div>
              </div>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="flex flex-row items-center gap-1">
                  Cancelar
                </Button>
                <Button color="primary"  onPress={onClose} className="flex flex-row items-center gap-1">
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
