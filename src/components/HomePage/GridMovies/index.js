import { Content, MovieThumbnails, Wrapper } from "./GridMoviesStyled";
import { Link } from "react-router-dom";
import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg'
import NavigatePages from './NavigatePages'


const GridMovies = ({allMovies}) => {
  const movies = allMovies.results;

  return (
  <Wrapper>
    <h2>Trending Today</h2>

    <Content>
      {movies.map(
        (movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieThumbnails>
            <img
            src={ movie.poster_path? getImageURL + movie.poster_path : noImage} 
            alt={movie.name ? movie.name : movie.title} />
          </MovieThumbnails>
          </Link>
        )
      )}
   </Content>
  
   <NavigatePages />
  </Wrapper> );
}
 
export default GridMovies;