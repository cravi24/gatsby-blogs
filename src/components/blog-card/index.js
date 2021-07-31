import React from 'react';
import { Link } from 'gatsby';
import { BlogCardContainer, Author, CreateTime, Summary, Title } from './style';
import Image from '../image';

const BlogCard = ({ blog, isFirst }) => {
  const { title, slug, createTime, author, blogContent, featuresImage } = blog;
  return (
    <BlogCardContainer isFirst={isFirst}>
      <Image {...featuresImage} />
      <Link to={`/blogs/${slug}`}>
        <Title>{title}</Title>
        <Summary>
          {JSON.parse(blogContent.raw)
            .content.reduce((acc, cur) => acc + cur.content[0].value, '')
            .substring(0, 200)
            .concat('...')}
        </Summary>
        <Author>{author}</Author>
        <CreateTime>{new Date(createTime).toLocaleDateString()}</CreateTime>
      </Link>
    </BlogCardContainer>
  );
};

export default BlogCard;
