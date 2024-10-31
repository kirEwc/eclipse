import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, } from "@nextui-org/react";
import { BiSendDashFill, BiSendPlusFill } from "@/icons/Icons";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalBaner: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [newComment, setNewComment] = useState("");



    return (
        <>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Editar Baner:</ModalHeader>
                            <ModalBody>
                                <Textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="mb-4"
                                />
                            </ModalBody>
                            <ModalFooter className="flex justify-between w-full">
                                <Button
                                    color="danger"
                                    variant="solid"
                                    onPress={onClose}                                   
                                >
                                    Cancelar
                                    <BiSendDashFill className="w-5 h-5 ml-1" />
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={onClose}                                   
                                >
                                    Enviar
                                    <BiSendPlusFill className="w-5 h-5 ml-1" />
                                </Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalBaner;