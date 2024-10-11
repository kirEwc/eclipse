import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea,} from "@nextui-org/react";
import StarComponent from "@/components/my-components/Star/StarComponent";
import { AkarIconsCommentAdd, HugeiconsCommentRemove01 } from "@/icons/Icons";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCustom: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [newComment, setNewComment] = useState("");
    const [newRating, setNewRating] = useState(0);

    
    
  return (
    <>
      <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Escribe tu opinión:</ModalHeader>
              <ModalBody>
              <StarComponent
                  Nstar={newRating}
                  onClick={(rating) => setNewRating(rating)}
                />
                <Textarea
                  placeholder="Write your review here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-4"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="flex flex-row items-center gap-1">
                  Cancelar
                  <HugeiconsCommentRemove01 className="w-6 h-6" />
                </Button>
                <Button color="primary"  onPress={onClose} className="flex flex-row items-center gap-1">
                  Enviar
                  <AkarIconsCommentAdd className="w-6 h-6 " />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
 export default ModalCustom;