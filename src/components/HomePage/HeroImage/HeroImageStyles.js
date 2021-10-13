import styled from "styled-components";

export const Wrapper= styled.section`
 background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${({bgImage}) => bgImage}), var(--medGrey);

   background-position: top;
   background-repeat: no-repeat;
   background-size: cover;
   animation: heroImg 1s linear;
   position: relative;

   a{
    text-decoration: none;
  }

   @keyframes heroImg {
     0%{
       opacity: 0;
     }
     100%{
       opacity: 1;
     }
   }
`;

export const HeroTextWrap = styled.article`
  max-width: var(--maxWidth);
  padding: 10% 20% 2em 10%;
  margin: 0 auto;
  h1{
    font-size: var(--fontSuperBig);
    margin-bottom: .5em;
  }
  p{
    font-size: var(--fontMed);
  }
`;