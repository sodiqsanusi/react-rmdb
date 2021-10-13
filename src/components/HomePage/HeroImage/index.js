import { getImageURL } from "../../../APIFiles/APIKeys";
import { Link } from "react-router-dom";
import { HeroTextWrap, Wrapper } from "./HeroImageStyles";

const HeroImage = ({allMovies}) => {
   const randomNo = Math.floor(Math.random() * 20);
   const movie = allMovies.results[randomNo]
   const bgImage = `${getImageURL}${movie.backdrop_path}`;

  return ( 
    <Wrapper bgImage={bgImage}>
      <Link to={`/movie/${movie.id}`}>
      <HeroTextWrap>
       <h1>{ movie.name ? movie.name : movie.title}</h1> 
        <p>{movie.overview}</p>
      </HeroTextWrap>
      </Link>
    </Wrapper>
   );
}
 
export default HeroImage;