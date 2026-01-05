import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(44, 36, 27, 0.6);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(motion.div)`
  background: var(--bg-color);
  width: 90%;
  max-width: 500px;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  position: relative;
  border: 1px solid rgba(140, 107, 69, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  background: transparent;
  color: var(--text-color);
  opacity: 0.5;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  background: #fff;
  font-size: 1rem;
  outline: none;
  font-family: 'Lato', sans-serif;
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(140, 107, 69, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  background: #fff;
  font-size: 1rem;
  outline: none;
  font-family: 'Lato', sans-serif;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(140, 107, 69, 0.1);
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: var(--secondary-color);
  }
`;
