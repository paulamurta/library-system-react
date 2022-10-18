import styled from "styled-components";
import stacks from "../../assets/stacks.jpg";

export const Picture = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-image: url(${stacks});
  background-size: cover;
  height: 100%;
  padding: 3vh;
  gap: 2vh;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    .homeBtn {
      font-weight: 400;
      font-family: "Poppins";
      color: var(--color-text-black);
      font-weight: 700;
      font-size: 1rem;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    .navBtn {
      font-weight: 400;
      font-family: "Poppins";
      font-size: 0.8rem;
      color: var(--color-text--dark);

      :hover {
        color: var(--color-accent);
        transition-duration: 0.5s;
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--color-accent2);
  }
  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
