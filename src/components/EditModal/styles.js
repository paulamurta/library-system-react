import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  //Tablet

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone

  @media screen and (max-width: 767px) {
  }
`;

export const Content = styled.div`
  width: 300px;
  max-height: 600px;
  background-color: var(--color-gray-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--color-accent);
    padding-bottom: 3vh;

    .button {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0;
    }

    h1 {
      color: var(--color-gray-0);
      font-weight: 700;
      font-size: 0.9rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3vh;
    width: 100%;
    color: var(--color-text);
    padding: 3vh;

    fieldset {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1vh;
      width: 100%;
      label {
        font-weight: 600;
        font-size: 0.9 rem;
        color: var(--color-text);
      }

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

    section {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3vh;
      width: 100%;
    }
  }

  //Tablet

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone

  @media screen and (max-width: 767px) {
  }
`;
