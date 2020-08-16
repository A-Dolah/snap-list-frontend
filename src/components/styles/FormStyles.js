import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroupStyle = styled.div`
  margin-bottom: 1.2rem;
`;

export const FormInputStyle = styled.input`
  padding: 0.4rem;
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 300;
  border: 1px solid var(--light-color);
  outline-color: var(--primary-color);
  outline-width: 1px;
`;

export const FormSubmitButtonStyle = styled.input`
  display: inline-block;
  background: ${(props) => `var(--${props.background}-color)`};
  color: ${(props) => `var(--${props.color}-color)`};
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius: 5px;
  letter-spacing: 0px;
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  &:hover {
    opacity: 0.8;
  }
`;
