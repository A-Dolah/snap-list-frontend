import styled from 'styled-components';

export const FileUploadStyle = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72vh;
  div {
    text-align: center;
    border: 1px dashed var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 40vw;
    height: ${(props) => (!props.image ? '60vh' : 'auto')};
    margin: 0 2rem 2rem 2rem;
    object-fit: cover;
    @media (max-width: 700px) {
      width: 80vw;
    }
  }
  .image-submit-btn {
    margin: 0;
    margin-top: auto;
  }
`;

export const FileInputStyle = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  + label {
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 300;
    text-align: center;
    color: var(--primary-color);
    width: 20%;
    height: 50px;
    margin: 0 auto;
  }
  &:focus {
    + label {
      opacity: 0.5;
      text-decoration: underline;
    }
  }
  + label {
    &:hover {
      opacity: 0.5;
      text-decoration: underline;
    }
  }
`;
