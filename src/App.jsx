import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import { FavoritesProvider } from './context/FavoritesContext';

/* Components */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

/* Pages */
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  font-weight: bold;
  z-index: 900;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    background-color: var(--secondary-color);
  }
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <AppContainer>
          <GlobalStyles />
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/room/:id" element={<RoomDetail />} />
            </Routes>
          </MainContent>

          <FloatingButton onClick={() => setIsModalOpen(true)}>
            İletişime Geç
          </FloatingButton>

          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          <Footer />
        </AppContainer>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
