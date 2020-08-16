import styled from 'styled-components';

export const AppLayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
  @media (max-width: 700px) {
    min-height: 90vh;
  }
`;
