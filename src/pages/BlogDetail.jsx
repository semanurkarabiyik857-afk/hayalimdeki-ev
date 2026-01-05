import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { blogPosts } from '../data';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 3rem) 5% 3rem;
`;

// Changed from Link to button for better programmatic control if Link was failing
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

const HeaderImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-md);
`;

const Content = styled.article`
  background: var(--white);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const BodyText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  white-space: pre-line;
  
  strong {
    color: var(--primary-color);
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <DetailContainer className="page-padding">Yazı bulunamadı.</DetailContainer>;

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Geri Dön
      </BackButton>

      <HeaderImage
        src={post.img}
        alt={post.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      />

      <Content>
        <Title>{post.title}</Title>
        <BodyText>{post.content}</BodyText>
      </Content>
    </DetailContainer>
  );
};

export default BlogDetail;
