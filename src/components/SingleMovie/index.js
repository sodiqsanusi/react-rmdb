import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import MovieHeader from './MovieHeader'
import { API_KEY, getSingleMovieURL } from "../../APIFiles/APIKeys";
import Spinner from "../HomePage/Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";


const SingleMovie = () => {

  const { id } = useParams();
  const getMovieCredits = `${getSingleMovieURL}${id}/credits?api_key=${API_KEY}&language=en-US`;
  const {data, loading, error} = useFetch(`${getSingleMovieURL}${id}?api_key=${API_KEY}&language=en-US`)
  const {data: movieCredits, loading: movieCreditsLoading, error: movieCreditsError} = useFetch(getMovieCredits);
  const history = useHistory();
  if(error){
    history.push('/404');
  }

  return ( 
    <>
    {loading && <Spinner />}
    {data && <MovieHeader title={data.title}/> }
    {data && <MovieInfo movie={data} movieCredits={movieCredits}/>}
    {data && <MovieInfoBar movie={data}/>}
    </>
   );
}
 
export default SingleMovie;