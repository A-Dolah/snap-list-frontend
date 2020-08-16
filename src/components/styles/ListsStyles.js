import styled from 'styled-components';

export const ListsGridContainerStyle = styled.div`
  grid-area: lists-grid;
  background: var(--light-color);
  color: black;

`;

export const ListsGridStyle = styled.div`
  background: var(--secondary-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  margin: 0 5rem 2rem 5rem;
  padding: 2rem;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  min-height: ${(props) => (props.fullWidth ? '80vh' : 'auto')};
  a {
    grid-column: 1/-1;
    justify-self: center;
    margin-top: 2rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const EmptyListsGridStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  padding: 0 1rem 1rem 1rem;
  text-align: center;
  border: 1px solid white;
  h1 {
    font-size: 2rem;
  }
`;

export const ListsGridHeaderStyle = styled.div`
  grid-column: 1/-1;
  color: var(--primary-color);
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-top: 1rem;
    color: var(--primary-color);
    text-align: center;
  }
  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const CardsGridStyle = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: start;
  justify-items: start;
  grid-gap: 20px;
  margin: 0 0 auto 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const ListCardStyles = styled.div`
  display: grid;
  background: var(--light-color);
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 1rem;
  height: 150px;
  width: 100%;
  background: #fff;
  padding: 2rem;
  text-align: center;
  opacity: ${(props) => props.notHovered && 0.4};
  p {
    color: #aaa;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;
