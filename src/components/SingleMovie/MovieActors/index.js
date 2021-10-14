import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg';
import { Content, Wrapper, ActorArticle } from "./MovieActorsStyled";


const MovieActors = ({credits}) => {

  if (credits) {
    var casts = credits.cast;
    console.log(casts);     
  }
  if (credits && casts.length === 0) {
    return '';
  }


  return ( 
    <Wrapper>
      <h2>Cast</h2>
      <Content>
        { credits && casts.map((cast) => (
          <ActorArticle key={cast.credit_id}>
            <div><img src={ cast.profile_path ? `${getImageURL}${cast.profile_path}` : noImage} alt={`${cast.name} profile bust.`} /></div>
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </ActorArticle>
        ))}
      </Content>
    </Wrapper>
   );
}
 
export default MovieActors;