import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Form = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--color-background2);
  height: 100%;
  padding: 3vh;

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--color-text);
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
