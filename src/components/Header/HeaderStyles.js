import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: var(--darkGrey);
  padding: 1em .5em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const LogoImg = styled.div`
  width: 40%;

  @media (min-width: 700px) {
    width: 20%;
  }
`;

export const TMDBLogoImg = styled.div`
  width: 30%;

  @media (min-width: 700px) {
    width: 10%;
  }
`;