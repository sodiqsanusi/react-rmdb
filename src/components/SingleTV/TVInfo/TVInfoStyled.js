import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({backdrop}) => backdrop ? `url('${backdrop}')`
  : '#111'};
  background-size: cover;
  background-position: center;
  padding: 2em 1em;
  animation: animateWrap 1s;
  @keyframes animateWrap {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.627);
    border-radius: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    justify-content: space-between;

    @media (min-width: 576px) {
      flex-direction: row;
    }
    .test{
      width: 100%;
      max-width: 470px;
      margin: 0 auto;
      @media (min-width: 576px) {
      margin: 0;
    }
      img{
        border-radius: 20px;
      }
    }
`;

export const Text = styled.div`
   padding: 2em 1em;
   color: var(--white);
   h1{
     margin-bottom: .5em;
     @media (min-width: 576px) {
       font-size: var(--fontSuperBig);
     }
   }
   .rating-directors{
     display: flex;
     margin-top: 1em;
     justify-content: flex-start;
   }
   .rates{
     display: flex;
     align-items: center;
     justify-content: center;
     width: 2em;
     height: 2em;
     background-color: #fff;
     color: black;
     border-radius: 50%;
     font-weight: 800;
   }
   .directors{
     margin-left: 1.5em;
   }
`;