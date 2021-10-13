import { Content, MovieThumbnails, Wrapper } from "./SearchedMoviesStyled";
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
          <MovieThumbnails
          key={movie.id}>
            <img
            src={ movie.poster_path ? getImageURL + movie.poster_path : noImage} 
            alt={movie.name ? movie.name : movie.title} />
          </MovieThumbnails>
        )
      )}
   </Content>
  </Wrapper>
   );
}
 
export default SearchedMoviesGrid;