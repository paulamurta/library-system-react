import styled from "styled-components";
import books from "../../assets/books.jpg";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10vh;
  background-color: var(--color-background);

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-image: url(${books});
  background-size: cover;
  border-radius: 10px;
  padding: 3vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1vh;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10vh;
      gap: 5vw;

      .navBtn {
        font-weight: 400;
        font-family: "Poppins";
        font-size: 0.8rem;
        color: var(--color-accent);

        :hover {
          color: var(--color-text--dark);
          transition-duration: 0.5s;
        }
      }
    }

    h1 {
      font-weight: 900;

      font-size: 1.6rem;
      color: var(--color-text);
    }

    h2 {
      font-weight: 300;
      font-size: 1rem;
      color: var(--color-text--dark);
    }
  }

  .enterBtn {
    font-weight: 800;
    font-size: 1.2rem;
    color: var(--color-text);

    :hover {
      color: var(--color-accent);
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
