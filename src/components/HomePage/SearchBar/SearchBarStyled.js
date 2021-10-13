import styled from "styled-components";


export const Wrapper = styled.div`
   background-color: var(--darkGrey);
   display: flex;
   align-items: center;
   padding: .5em 2em;
`;

export const SpanButton = styled.button`
  outline: 0;
  border: 0;
  background-color: transparent;
  margin: 0 auto;
`

export const Content = styled.form`
  position: relative;
  display: flex;
  background-color: var(--medGrey);
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 40px;
  justify-content: space-between;
  padding: .5em;
  img{
     width: clamp(15px, 30px, 40px);
     margin: 0 auto;
     transition: .3s;
     cursor: pointer;
     :hover,
     :focus{
      transform: scale(0.9);
     }
     @media (max-width: 600px) {
      width: 15px;
     }
   }
   input{
     font-size: var(--fontMed);
     width: 95%;
     background-color: transparent;
     border: none;
     outline: none;
     color: var(--white);
   }
`;