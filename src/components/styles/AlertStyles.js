import styled from 'styled-components';

export const AlertStyle = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: ${(props) => `var(--${props.alertType}-color)`};
  color: #333;
`;
