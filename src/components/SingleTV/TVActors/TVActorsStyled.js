import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1em 2em;
  h2{
    font-size: var(--fontSuperBig);

    margin-bottom: 1em;
  }
`;

export const Content = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1em;
`

export const ActorArticle = styled.article`
  color: var(--white);
  background-color: var(--darkGrey);
  width: 70%;
  margin: 0 auto;
  padding: .5em 1em;
  border-radius: 20px;
  text-align: center;
    img{
      border-radius: 20px;
    }
  h3{
    margin-top: .5em;
  }
`;