import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { API_KEY, getSingleTVURL } from "../../APIFiles/APIKeys";
import Spinner from '../HomePage/Spinner'
import TVHeader from "./TVHeader";
import TVInfo from "./TVInfo";
import TVInfoBar from "./TVInfoBar";
import TVActors from "./TVActors";
import PreviousPageButton from "../SingleMovie/PreviousPageButton";


const SingleTV = () => {

  const { id } = useParams();
  const getTVCredits = `${getSingleTVURL}${id}/credits?api_key=${API_KEY}&language=en-US`;
  const {data, loading, error} = useFetch(`${getSingleTVURL}${id}?api_key=${API_KEY}&language=en-US`)
  const {data: TVCredits} = useFetch(getTVCredits);


  const history = useHistory();
  if(error){
    history.push('/404');
  }

  return ( 
    <>
    { loading && <Spinner />}
    {data && <TVHeader title={data.name}/>}
    {data && <TVInfo tv={data} TVCredits={TVCredits}/>} 
    {data && <TVInfoBar tv={data}/>}
    {data && <PreviousPageButton />}
    {data && <TVActors credits={TVCredits} />}
    </>
   );
}
 
export default SingleTV;