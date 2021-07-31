import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ImageContainer from './style';

const Image = ({ description, gatsbyImageData }) => {
  return (
    <ImageContainer>
      <GatsbyImage alt={description} image={gatsbyImageData} />
    </ImageContainer>
  );
};

export default Image;
