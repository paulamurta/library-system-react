import styled from 'styled-components';

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

export const Container = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--color-background2);
  height: 100%;
  padding: 3vh;
  overflow-y: scroll;
  gap: 2vh;

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--color-text-black);
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Book = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1vh;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;

    button {
      color: var(--color-accent);
      height: 100%;

      :hover {
        color: var(--color-text--dark);
        transition-duration: 0.5s;
      }
    }
  }

  h2 {
    font-weight: 600;
    font-size: 0.9 rem;
    color: var(--color-text);
  }

  p {
    font-weight: 200;
    font-size: 0.9rem;
    color: var(--color-text);
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
