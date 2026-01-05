import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { roomData } from '../data';

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 3rem) 5% 3rem;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 2rem;
  background: none;
  border: none;
  font-size: 1rem;
  padding: 0;

  &:hover {
    color: var(--secondary-color);
    transform: translateX(-5px);
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Content = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 1rem;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  white-space: pre-line;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 5rem;
  font-size: 1.5rem;
  color: var(--secondary-color);
`;

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomData.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <DetailContainer className="page-padding">
        <NotFound>Oda bulunamadı.</NotFound>
        <BackButton onClick={() => navigate('/')}><FaArrowLeft /> Anasayfaya Dön</BackButton>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Geri Dön
      </BackButton>

      <Image
        src={room.img}
        alt={room.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <Content>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {room.title}
        </Title>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Description>{room.details}</Description>
        </motion.div>
      </Content>
    </DetailContainer>
  );
};

export default RoomDetail;
