import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, } from "@nextui-org/react";
import { BiSendDashFill, BiSendPlusFill } from "@/icons/Icons";
import ApiRequest from "@/services/ApiRequest";
import CorrectMessage from "@/messages/CorrectMessage";
import ErrorMessage from "@/messages/ErrorMessage";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    
}

const ModalBaner: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const getBaner = async () => {
        try {
            const response = await ApiRequest({
                method: 'GET',
                url: 'https://1935-195-181-163-29.ngrok-free.app/api/Navbar/GetNavbar',
            });
            console.log(response);

            if (response?.status === 200) {     
                console.log(response);
                CorrectMessage('Baner obtenido correctamente');
                
            } else {
                ErrorMessage('Error al obtener el baner');
            }
        } catch (error) {
            console.error('Error fetching baner:', error);
        }
    };


    if (isOpen == true) {      
            getBaner();       
    }
   


    const [newComment, setNewComment] = useState("");

    const handleClick = async () => {
        try {
            const response= await ApiRequest({
                method: 'POST',
                url: 'https://1935-195-181-163-29.ngrok-free.app/api/Navbar/ChangeNavbar',
                body: {
                  navar:newComment
                },
            });
            console.log(response);

            if (response?.status === 200) {
                CorrectMessage('Texto editado correctamente');
                onClose();
            } else {
               ErrorMessage('Error al editar el texto');
            }
        } catch (error) {
            
        }
    };


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
                                    onClick={handleClick}                                                                 
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