import { Content, MovieThumbnails, Wrapper } from "./SearchedMoviesStyled";
import { Link } from "react-router-dom";
import { getImageURL } from "../../APIFiles/APIKeys";
import noImage from '../../images/no_image.jpg'

const SearchedMoviesGrid = ({searchedMovies, query}) => {

  const movies = searchedMovies.results;
  return ( 
    <Wrapper>
    <h2>Results For '{query}'</h2>

    <Content>
      {movies.map(
        (movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
          
          <MovieThumbnails>
            <img
            src={ movie.poster_path ? getImageURL + movie.poster_path : noImage} 
            alt={movie.name ? movie.name : movie.title} />
          </MovieThumbnails>
          </Link>
        )
      )}
   </Content>
  </Wrapper>
   );
}
 
export default SearchedMoviesGrid;