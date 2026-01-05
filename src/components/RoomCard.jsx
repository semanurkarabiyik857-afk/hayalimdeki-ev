import React from 'react';
import { Card, ImageWrapper, Image, Content, Title, Description } from './RoomCard.styles';
import { GiHearts } from 'react-icons/gi';
import { useFavorites } from '../context/FavoritesContext';

const RoomCard = ({ room }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const liked = isFavorite(room.id);

  const handleLike = (e) => {
    e.preventDefault(); // Prevent navigating to room detail
    toggleFavorite(room.id);
  };

  return (
    <Card
      to={`/room/${room.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ImageWrapper>
        <Image src={room.img} alt={room.title} />
        <div
          onClick={handleLike}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 5,
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <GiHearts size={22} color={liked ? '#e74c3c' : '#bdc3c7'} />
        </div>
      </ImageWrapper>
      <Content>
        <Title>{room.title}</Title>
        <Description>{room.description}</Description>
      </Content>
    </Card>
  );
};

export default RoomCard;
