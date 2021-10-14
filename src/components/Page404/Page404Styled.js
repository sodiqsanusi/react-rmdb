import styled from "styled-components";

export const Wrapper = styled.section`
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 1em 2em;

   @media (min-width: 615px) {
     padding: 1em 15%;
   }
   ul{
     list-style: none;
   }

  h1{
    color: #000;
    font-size: 3rem;
  }
  h2{
    margin: .3em 0;
  }
  p{
    color: #000;
    font-size: 1.5rem;
  }
  button{
    margin-top: .5em;
    border: none;
    outline: none;
    color: var(--white);
    padding: 1em 2em;
    background-color: var(--darkGrey);
    font-size: 1.3rem;
    border-radius: 20px;
    transition: .3s;
    cursor: pointer;
    :hover,
    :focus{
      transform: scale(0.98);
      opacity: 0.9;
    }
  }
  
`