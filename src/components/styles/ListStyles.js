import styled from 'styled-components';

export const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
  color: var(--primary-color);
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-top: 1rem;
    color: var(--primary-color);
    text-align: center;
  }
  img {
    width: 300px;
    max-height: 300px;
    object-fit: contain;
    margin: 2rem 0;
  }
`;

export const ListItemsGridStyle = styled.div`
  background-color: var(--primary-color);
  color: var(--light-color);
  width: 100vw;
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: repeat(auto-fill, 200px);
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-gap: 30px;
  padding: 30px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 100vw;
  }
`;

export const ListItemStyle = styled.label`
  display: grid;
  background: var(--light-color);
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 50px;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  color: var(--primary-color);
  text-decoration: ${(props) => props.done && 'line-through'};
  opacity: ${(props) => props.done && 0.4};
  &:hover {
    cursor: pointer;
  }
`;
