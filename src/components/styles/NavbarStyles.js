import styled from 'styled-components';

export const NavbarStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  padding: 0.7rem 0.5rem;
  position: fixed;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  height: 75px;
  top: 0;
  opacity: 0.9;
  background: white;
  a {
    color: var(--primary-color);
    padding: 0.1rem;
    margin: 0 0.1rem;
    text-transform: uppercase;
  }
  ul {
    a {
      font-size: 1.2rem;
      padding: 0 0.5rem;
    }
    &.auth-links {
      margin: 0.5rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin: auto 0;
        height: 25px;
      }
    }
    &.guest-links {
      margin: 0.5rem 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media (max-width: 700px) {
        margin: 0.2rem 0;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    div {
      margin: 10px 5px 0 0;
    }
  }
`;
