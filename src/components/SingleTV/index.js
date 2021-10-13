import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { API_KEY, getSingleTVURL } from "../../APIFiles/APIKeys";


const SingleTV = () => {

  const { id } = useParams();

  const {data, loading, error} = useFetch(`${getSingleTVURL}${id}?api_key=${API_KEY}&language=en-US`)
  console.log(data);
  const history = useHistory();
  if(error){
    history.push('/404');
  }

  return ( 
    <div>TV - {id}</div>
   );
}
 
export default SingleTV;