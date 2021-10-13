import styled from "styled-components";

export const Spinner = styled.div`
   width: 10vw;
   height: 10vw;
   border: 8px solid var(--lightGrey);
   border-top: 8px solid var(--darkGrey);
   border-bottom: 10px solid var(--darkGrey);
   border-radius: 50%;
   margin: 10% auto;
   animation: spinner .5s linear infinite;

   @keyframes spinner{
     from{
       transform: rotate(0deg);
     }
     to{
       transform: rotate(360deg);
     }
   }
`