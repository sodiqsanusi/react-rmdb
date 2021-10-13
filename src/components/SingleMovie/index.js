import { useParams } from "react-router";


const SingleMovie = () => {

  const { id } = useParams();

  return ( 
    <div>Movie - {id}</div>
   );
}
 
export default SingleMovie;