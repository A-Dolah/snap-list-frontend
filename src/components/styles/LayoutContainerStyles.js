import styled from 'styled-components';

export const LayoutContainerStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => props.inLandingPage && '0vh'};
  min-height: ${(props) => !props.inLandingPage && '100vh'};
  padding-top: ${(props) => (props.inLandingPage ? '0px' : '75px')};
  padding-bottom: ${(props) => (props.inLandingPage ? '0px' : '60px')};
  box-sizing: box-sizing;
`;
