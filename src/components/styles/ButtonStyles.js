import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StandardButtonStyle = styled.button`
  display: inline-block;
  background: ${(props) => `var(--${props.background}-color)`};
  color: ${(props) => `var(--${props.color}-color)`};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 5px;
  letter-spacing: 0px;
  margin: 2rem;
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkButtonStyle = styled(Link)`
  display: inline-block;
  background: ${(props) => `var(--${props.background}-color)`};
  color: ${(props) => `var(--${props.color}-color)`};
  border: 2px solid ${(props) => `var(--${props.border}-color)`};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 5px;
  letter-spacing: 0px;
  width: auto;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const RemoveImageButtonStyle = styled.button`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 5px;
  letter-spacing: 0px;
  margin-bottom: 2rem;
  border: none;
  background: var(--light-color);
  color: var(--primary-color);
  font-weight: 300;
`;
