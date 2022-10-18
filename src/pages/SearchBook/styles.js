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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  width: 100%;
  color: var(--color-text);

  input {
    font-weight: 200;
    font-size: 0.9 rem;
    color: var(--color-text-black);
    height: 30px;
    width: 250px;
    outline: 0;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 3px;

    ::placeholder {
      padding-left: 3px;
      padding-right: 3px;
      color: var(--color-text);
    }
  }

  button {
    font-weight: 400;
    font-family: 'Poppins';
    font-size: 1rem;
    color: var(--color-text-black);
    background-color: var(--color-accent);
    padding: 3px 20px;

    :hover {
      color: var(--color-white);
      background-color: var(--color-gray-3);
      transition-duration: 0.5s;
    }
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1vh;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vh;

    button {
      font-weight: 400;
      font-family: 'Poppins';
      font-size: 1rem;
      color: var(--color-text-black);
      background-color: var(--color-accent);
      padding: 3px 20px;

      :hover {
        color: var(--color-white);
        background-color: var(--color-gray-3);
        transition-duration: 0.5s;
      }
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1vh;
    }
  }

  li {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vw;

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
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
