import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1e1915; /* Çok koyu kahve, siyaha yakın */
  color: #f0ece6;
  padding: 4rem 5% 2rem;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const FooterSection = styled.div`
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
  }

  p {
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  
  ul {
    li {
      margin-bottom: 0.8rem;
      a {
        opacity: 0.8;
        &:hover {
          opacity: 1;
          color: var(--primary-color);
        }
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    font-size: 1.4rem;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--accent-color);
      transform: translateY(-3px);
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.6;
`;
