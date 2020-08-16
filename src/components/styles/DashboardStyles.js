import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardGridStyle = styled.div`
  background: var(--primary-color);
  color: var(--light-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: .7fr .7fr .7fr .7fr 40px;
  width: 100%;
  grid-template-areas:
    'header header'
    'a aside'
    'b aside'
    'c aside'
    'add-list add-list'
    'lists-grid lists-grid';
  @media (max-width: 700px) {
    grid-template-areas:
      'header header'
      'a a'
      'b b'
      'c c'
      'add-list add-list'
      'lists-grid lists-grid';
  }
`;

export const DashboardGridHeaderStyle = styled.div`
  grid-area: header;
  margin-top: 2rem;
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-top: 1rem;
    text-align: center;
  }
  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;

export const DashboardGridCardStyle = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  margin: 2rem 2rem 0rem 2rem;
  grid-area: ${(props) => props.gridArea};
  div {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 700px) {
    justify-self: center;
    align-items: center;
    margin: 0;
  }
`;

export const DashboardIllustrationStyle = styled.img`
  grid-area: aside;
  justify-self: center;
  align-self: center;
  width: 300px;
`;

export const DashboardAddLink = styled(Link)`
  grid-area: add-list;
  background: var(--light-color);
  color: var(--primary-color);
  display: flex;
  justify-items: center;
  align-items: center;
  z-index: 1;
  span {
    background: var(--primary-color);
    color: var(--dark-color);
    border: 2px solid var(--light-color);
    margin: 0 auto;
    z-index: 1;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      line {
        color: white;
      }
    }
  }
  span:hover {
    box-shadow: 0 0 20px rgba(206, 243, 181, 0.945);
  }
`;
