import React from 'react';
import PageLayout from '../components/page-layout';
import Seo from '../components/seo';
import Container from '../components/container/style';
import BlogCard from '../components/blog-card';
import { graphql } from 'gatsby';

const ComponentName = ({ data }) => {
  return (
    <>
      <Seo title="Just like that blog" />
      <PageLayout>
        <Container>
          {data.allContentfulBlog.nodes.map((blog, i) => (
            <BlogCard key={i} blog={blog} isFirst={i === 0} />
          ))}
        </Container>
      </PageLayout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        title
        createTime
        author
        featuresImage {
          description
          gatsbyImageData
        }
        slug
        blogContent {
          raw
        }
      }
    }
  }
`;

export default ComponentName;
