import styled from "styled-components";

export const Wrapper = styled.header`
   display: flex;
   align-items: center;
   background-color: var(--darkGrey);
   color: var(--white);
   padding: .5em 1em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 440px;
  font-size: var(--fontMed);
  @media (min-width : 500px) {
    margin-left: 6%;
  }
  a,span{
    margin-right: .3em;
  }
  
  a{
    color: var(--white);
    text-decoration: none;
    :hover,
    :focus{
      text-decoration: underline 1px var(--white);
    }
  }
`