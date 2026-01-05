import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Premium Rustic Palette */
    --bg-color: #fcfbf7; /* Daha sıcak, kırık beyaz */
    --text-color: #2c241b; /* Çok koyu kahve */
    --primary-color: #8c6b45; /* Altın-Ahşap tonu */
    --secondary-color: #4a5d3f; /* Zeytin yeşili */
    --accent-color: #d4a373; /* Açık ahşap/bej */
    --white: #ffffff;
    --soft-gray: #e6e4dc;
    
    /* Functional */
    --shadow-sm: 0 4px 6px rgba(44, 36, 27, 0.05);
    --shadow-md: 0 10px 20px rgba(44, 36, 27, 0.08);
    --shadow-lg: 0 20px 40px rgba(44, 36, 27, 0.12);
    --radius-md: 12px;
    --radius-lg: 24px;
    --nav-height: 80px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Lato', sans-serif; /* Body font */
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif; /* Heading font */
    font-weight: 700;
    line-height: 1.3;
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    outline: none;
  }

  /* Utility class for standard page padding (not for home) */
  .page-padding {
    padding-top: var(--nav-height);
    min-height: 100vh;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-color);
  }

  ::-webkit-scrollbar-thumb {
    background: #d4a373;
    border-radius: 5px;
    border: 2px solid var(--bg-color);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`;
