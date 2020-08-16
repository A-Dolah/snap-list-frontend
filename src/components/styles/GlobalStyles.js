import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;
    font-size: 1.1rem;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
  }

  p {
  letter-spacing: 1px;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
  }
`;
