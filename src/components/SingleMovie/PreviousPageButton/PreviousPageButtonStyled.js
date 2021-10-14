import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    color: var(--white);
    margin: .5em auto;
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
`;