import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { API_KEY, getSingleMovieURL } from "../../APIFiles/APIKeys";


const SingleMovie = () => {

  const { id } = useParams();

  const {data, loading, error} = useFetch(`${getSingleMovieURL}${id}?api_key=${API_KEY}&language=en-US`)
  console.log(data);

  const history = useHistory();
  if(error){
    history.push('/404');
  }

  return ( 
    <div>Movie - {id}</div>
   );
}
 
export default SingleMovie;