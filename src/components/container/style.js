import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  max-width: 1110px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1109px) {
    padding: 0 1rem;
  }
`;

export default Container;
