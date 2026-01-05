import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Card = styled(motion.create(Link))`
  display: block;
  background: var(--white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s ease;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 280px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 3px solid var(--soft-gray);
  transition: border-color 0.3s ease;

  ${Card}:hover & {
    border-bottom-color: var(--primary-color);
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

export const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;
