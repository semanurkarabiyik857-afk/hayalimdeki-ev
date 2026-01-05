import React, { useState, useEffect } from 'react';
import { GiHouse, GiHearts } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Nav, Logo, MenuLinks } from './Navbar.styles';
import { useFavorites } from '../context/FavoritesContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      $isScrolled={isScrolled}
    >
      <Logo to="/" $isScrolled={isScrolled}>
        <GiHouse size={32} />
        Hayalimdeki Ev
      </Logo>
      <MenuLinks $isScrolled={isScrolled}>
        <Link to="/">Anasayfa</Link>
        <Link to="/blog">Blog</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: isScrolled ? 'var(--primary-color)' : '#fff', transition: 'color 0.3s' }}>
          <GiHearts size={24} />
          <span style={{ fontWeight: 'bold' }}>{favorites.length}</span>
        </div>
      </MenuLinks>
    </Nav>
  );
};

export default Navbar;
