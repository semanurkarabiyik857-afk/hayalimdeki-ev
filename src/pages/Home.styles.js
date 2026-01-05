import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HeroSection = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  color: var(--white);
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
`;

export const Section = styled.section`
  padding: 6rem 5%;
  background-color: ${({ $bg }) => $bg || 'var(--bg-color)'};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--accent-color);
    margin: 1rem auto 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  font-size: 2rem;
  opacity: 0.8;
  cursor: pointer;
`;
