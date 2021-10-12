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
export const MovieThumbnails = styled.article`
  animation: animateThumb 1.5s;
  transition: .3s;

  @keyframes animateThumb{
    from{
      transform: scale(.5);
    }
  }
  img{
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
  :hover,
  :focus{
    opacity: .8;
    transform: scale(.97);
  }

  img{
    object-fit: cover;
  }
   
`