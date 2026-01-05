import React, { useState, useMemo } from 'react';
import { roomData } from '../data';
import RoomCard from '../components/RoomCard';
import FilterBar from '../components/FilterBar';
import InteractiveBlueprint from '../components/InteractiveBlueprint';
import { HomeContainer, HeroSection, HeroContent, HeroTitle, HeroSubtitle, Section, SectionTitle, Grid, ScrollDown } from './Home.styles';
import { FiChevronDown } from 'react-icons/fi';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const categories = ['Salon', 'Mutfak', 'Yatak Odası', 'Banyo', 'Balkon', 'Eğlence', 'Çalışma'];

  // Filtering Logic
  const filteredRooms = useMemo(() => {
    return roomData.filter(room => {
      const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = activeCategory === 'Tümü' || room.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle>Doğal Yaşamın Zarafeti</HeroTitle>
          <HeroSubtitle>
            Hayalinizdeki konfor, doğanın huzuruyla buluşuyor.
            Sıcak, samimi ve zamansız bir estetik.
          </HeroSubtitle>
          <button
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              borderRadius: '30px',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onClick={scrollToContent}
          >
            Keşfetmeye Başla
          </button>
        </HeroContent>

        <ScrollDown
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <FiChevronDown />
        </ScrollDown>
      </HeroSection>

      <Section $bg="#fff">
        <InteractiveBlueprint />
      </Section>

      <Section id="collection">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Koleksiyonumuz
        </SectionTitle>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />

        <Grid>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', fontSize: '1.2rem', color: '#888' }}>
              Aradığınız kriterlere uygun oda bulunamadı.
            </p>
          )}
        </Grid>
      </Section>
    </HomeContainer>
  );
};

export default Home;
