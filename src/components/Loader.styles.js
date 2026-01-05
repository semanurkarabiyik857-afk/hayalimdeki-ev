import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const dash = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

export const LoaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const LogoText = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: var(--primary-color);
  margin-top: 1rem;
`;

export const SvgIcon = styled.svg`
  width: 100px;
  height: 100px;
  
  path {
    fill: none;
    stroke: var(--primary-color);
    stroke-width: 2;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 2s ease-in-out forwards;
  }
`;
