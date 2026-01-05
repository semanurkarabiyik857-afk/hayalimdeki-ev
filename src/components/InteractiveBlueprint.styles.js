import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BlueprintContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
  background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png"); /* Subtle paper texture */
  background-color: #fdfbf7;
  border: 10px solid #fff;
  box-shadow: var(--shadow-md);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border: 1px solid rgba(0,0,0,0.1);
    pointer-events: none;
    margin: 10px;
  }
`;

export const BlueprintTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  
  span {
    display: block;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    color: var(--text-color);
    letter-spacing: 2px;
    margin-top: 0.5rem;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

export const SVGWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.1));
  }

  .room-path {
    fill: #f4f1ea;
    stroke: var(--text-color);
    stroke-width: 2;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      fill: var(--accent-color);
      stroke: var(--primary-color);
      stroke-width: 3;
    }
  }

  .room-label {
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    fill: var(--text-color);
    pointer-events: none;
    text-anchor: middle;
  }
`;

export const Tooltip = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  pointer-events: none;
  z-index: 10;
  text-align: center;
  min-width: 200px;

  h3 {
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;
