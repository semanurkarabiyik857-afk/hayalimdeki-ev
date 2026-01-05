import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(252, 251, 247, 0.95)' : 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'};
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? 'var(--shadow-sm)' : 'none'};
  transition: all 0.4s ease;
`;

export const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ $isScrolled }) =>
    $isScrolled ? 'var(--text-color)' : '#fff'}; 
  text-shadow: ${({ $isScrolled }) =>
    $isScrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.5)'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
`;

export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ $isScrolled }) => $isScrolled ? 'var(--text-color)' : '#fff'}; /* White text when transparent */
    text-shadow: ${({ $isScrolled }) => $isScrolled ? 'none' : '1px 1px 3px rgba(0,0,0,0.7)'};
    position: relative;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: ${({ $isScrolled }) => $isScrolled ? 'var(--primary-color)' : '#fff'};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
    
    &:hover {
        opacity: 0.9;
    }
  }
`;
