import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { Overlay, ModalContainer, CloseButton, ModalTitle, Form, Input, TextArea, SubmitButton } from './ContactModal.styles';

const ContactModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi!');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <ModalContainer
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        onClick={(e) => e.stopPropagation()}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <CloseButton onClick={onClose}><IoClose /></CloseButton>
                        <ModalTitle>İletişime Geçin</ModalTitle>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" placeholder="Adınız Soyadınız" required />
                            <Input type="email" placeholder="E-posta Adresiniz" required />
                            <TextArea placeholder="Hayalinizdeki ev için bize mesaj bırakın..." required />
                            <SubmitButton type="submit">Gönder</SubmitButton>
                        </Form>
                    </ModalContainer>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
