import styled from 'styled-components';

export const IngredientsStyle = styled.div`
  margin-top: 2rem;
  text-align: center;
  h1 {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--primary-color);
    text-align: center;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 1.1rem;
    }
  }
  div {
    background-color: var(--secondary-color);
    color: var(--light-color);
    width: 100vw;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-gap: 30px;
    padding: 30px;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 20px;
      width: 100vw;
      font-size: 1.1rem;
    }
  }
`;

export const IngredientCardStyle = styled.label`
  display: grid;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 50px;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  background: ${(props) => `var(--${props.background}-color)`};
  color: ${(props) => `var(--${props.color}-color)`};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const LoaderStyle = styled.div`
  color: var(--primary-color);
  margin: auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  * {
    margin-left: 1rem;
  }
`;
