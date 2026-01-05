import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BlogContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 5%;
`;

export const BlogTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    margin: 1rem auto 0;
  }
`;

export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

export const ArticleCard = styled(motion.article)`
  background: white;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  padding: 1.5rem;
`;

export const ArticleHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

export const ArticleText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const ReadMore = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
