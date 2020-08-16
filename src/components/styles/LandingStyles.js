import styled from 'styled-components';

export const LandingStyles = styled.section`
  height: 100vh;
  position: relative;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  @media (max-width: 700px) {
    background-size: cover;
    height: 90vh;
  }
  .dark-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 3.2rem;
    letter-spacing: 10px;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  div {
    &.landing-inner {
      color: #fff;
      height: 100%;
      width: 80%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .landing-btns {
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      @media (max-width: 700px) {
        width: 80%;
      }
    }
  }
`;
