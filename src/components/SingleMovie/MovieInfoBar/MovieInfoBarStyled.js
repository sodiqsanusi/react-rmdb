import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkGrey);
  padding: .5em 2em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media (min-width: 559px) {
    flex-direction: row;
    width: 100%;
  }

  
`;

export const Text = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: var(--white);
  padding: .5em 1em;
  background-color: var(--medGrey);
  border-radius: 20px;
  margin: .3em 0;
  
  @media (min-width: 559px) {
    flex-direction: row;
    width: 23%;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  font-size: var(--fontBig);
  align-items: center;
  justify-content: center;
  color: #000;
  padding: .5em 1em;
  background-color: #ffa31a;
  margin: .3em 0;
  border-radius: 10px;
  cursor: pointer;
  
  @media (min-width: 559px) {
    flex-direction: row;
    width: 20%;
  }
  :hover,
   :focus{
     background-color: #ffa31abb;
     transform: scale(0.98);
   }
`;