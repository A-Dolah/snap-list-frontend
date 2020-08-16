import styled from 'styled-components';

export const FooterStyles = styled.footer`
  text-align: center;
  padding: 0.9rem 0.5rem;
  z-index: 2;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  opacity: 0.9;
  border-top: 1px solid var(--secondary-color);
  background: white;
  a {
    font-weight: 600;
  }
  p {
    color: var(--primary-color);
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
`;
