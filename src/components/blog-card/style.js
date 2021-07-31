import styled from 'styled-components';

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: ${({ isFirst }) => (isFirst ? 'row' : 'column')};
  width: ${({ isFirst }) => (isFirst ? '100%' : '30%')};
  gap: 1rem;
  margin: 1rem;
`;

export const Author = styled.h4`
  color: #b54174;
`;

export const CreateTime = styled.p`
  color: rgba(0, 0, 0, 0.54);
  padding: 0.4rem 0;
`;

export const Summary = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 1.25rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
`;

export const Title = styled.h1`
  line-height: 2rem;
`;
