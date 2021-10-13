import styled from "styled-components";

export const Wrapper = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1em 2em;
`;

export const MainButton = styled.button`
  border: none;
  outline: none;
  padding: .5em 2em;
  border-radius: 8px;
  background-color: var(--darkGrey);
  font-size: var(--fontMed);
  color: var(--white);
  transition: .3s;

  :hover,
  :focus{
    opacity: 0.8;
    transform: scale(0.97);
  }

  @media (max-width: 620px) {
    padding: .5em;
  }
`;

export const SmallDiv = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
`

export const SmallButton = styled.button`
   border: none;
   outline: none;
   padding: .5em 1em;
   margin: 0 .5em;
   color: var(--white);
   border-radius: 50%;
   transition: .3s;
   background-color: ${({page, value}) => page === value ? 'red': 'var(--darkGrey)'} ;

   :hover,
   :focus{
     opacity: ${({page, value}) => page === value ? '1': '0.8'} ;
     transform: scale( ${({page, value}) => page === value ? '1': '0.98'} );
   }
`;