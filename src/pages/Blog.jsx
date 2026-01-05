import React from 'react';
import { Link } from 'react-router-dom';
import { BlogContainer, BlogTitle, ArticleGrid, ArticleCard, ArticleImage, ArticleContent, ArticleHeader, ArticleText, ReadMore } from './Blog.styles';
import { blogPosts } from '../data';

const Blog = () => {
    return (
        <BlogContainer className="page-padding">
            <BlogTitle>İlham Köşesi</BlogTitle>
            <ArticleGrid>
                {blogPosts.map((post) => (
                    <ArticleCard
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ArticleImage src={post.img} alt={post.title} />
                        <ArticleContent>
                            <ArticleHeader>{post.title}</ArticleHeader>
                            <ArticleText>{post.summary}</ArticleText>
                            <Link to={`/blog/${post.id}`}>
                                <ReadMore>Devamını Oku →</ReadMore>
                            </Link>
                        </ArticleContent>
                    </ArticleCard>
                ))}
            </ArticleGrid>
        </BlogContainer>
    );
};

export default Blog;
