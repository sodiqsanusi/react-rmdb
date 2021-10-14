import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg';
import { Content, Wrapper, Text } from "./MovieInfoStyled";

const MovieInfo = ({movie, movieCredits}) => {

  if (movieCredits) {
    var directors = movieCredits.crew.filter((onecrew) => {
      return onecrew.job === 'Director';
     })

     var backdrop = `${getImageURL}${movie.backdrop_path}` ;
  }

  return ( 
    <Wrapper backdrop={backdrop}>
      <Content>
        <div className='test'><img src={movie.poster_path? `${getImageURL}${movie.poster_path}` : noImage} alt={`${movie.title} movie poster`} /></div>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="rates">{movie.vote_average}</div>
            </div>
            <div className='directors'>
              <h3>DIRECTOR{ movieCredits && directors.length > 1 ? 'S' : ''}</h3>
                {movieCredits && directors.map((director) => (
                  <p key={director.id}>{director.name}</p>
                )) }
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
   );
}
 
export default MovieInfo;