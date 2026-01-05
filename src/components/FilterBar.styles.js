import styled from 'styled-components';

export const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  /* Glassmorphism Effect */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  padding: 0.8rem 1.5rem;
  border: 1px solid rgba(140, 107, 69, 0.2);
  border-radius: 30px;
  width: 100%;
  max-width: 300px;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-color);

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(140, 107, 69, 0.15);
    transform: scale(1.02);
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  background: ${({ $active }) => $active ? 'var(--primary-color)' : 'transparent'};
  color: ${({ $active }) => $active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${({ $active }) => $active ? 'var(--primary-color)' : 'rgba(140, 107, 69, 0.3)'};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: ${({ $active }) => $active ? 'var(--secondary-color)' : 'rgba(140, 107, 69, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
