import { Content, MovieThumbnails, Wrapper } from "./GridMoviesStyled";
import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg'


const GridMovies = ({allMovies}) => {
  const movies = allMovies.results;

  return (
  <Wrapper>
    <h2>Trending Today</h2>

    <Content>
      {movies.map(
        (movie) => (
          <MovieThumbnails
          key={movie.id}>
            <img
            src={ movie.poster_path? getImageURL + movie.poster_path : noImage} 
            alt={movie.name ? movie.name : movie.title} />
          </MovieThumbnails>
        )
      )}
   </Content>
  </Wrapper> );
}
 
export default GridMovies;