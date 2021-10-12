import useFetch from "../../hooks/useFetch";
import { trendingMovies_URL } from "../../APIFiles/APIKeys"; 

const HomePage = () => {

  const { data: allMovies, loading, error} = useFetch(trendingMovies_URL);
  

  return ( 
    <div>
      {allMovies && console.log(allMovies)}
    </div>
   );
}
 
export default HomePage;