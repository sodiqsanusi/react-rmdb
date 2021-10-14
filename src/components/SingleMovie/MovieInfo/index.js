import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg';

const MovieInfo = ({movie, movieCredits}) => {

  if (movieCredits) {
    var directors = movieCredits.crew.filter((onecrew) => {
      return onecrew.job === 'Director';
     })
  }

  return ( 
    <section>
      <div><img src={movie.poster_path? `${getImageURL}${movie.poster_path}` : noImage} alt={`${movie.title} movie poster`} /></div>
      <div>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="rates">{movie.vote_average}</div>
          </div>
          <div>
            <h3>DIRECTOR{ movieCredits && directors.length > 1 ? 'S' : ''}</h3>
              {movieCredits && directors.map((director) => (
                <p key={director.id}>{director.name}</p>
              )) }
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MovieInfo;