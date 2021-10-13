// IMPORTING THE USEFETCH CUSTOM HOOK TO GET EXTERNAL DATA
import useFetch from "../../hooks/useFetch";
// IMPORTING THE API'S VALUES FROM A REUSABLE .JS FILE
import { trendingMovies_URL } from "../../APIFiles/APIKeys"; 
import HeroImage from "./HeroImage";
import GridMovies from "./GridMovies";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

const HomePage = () => {

  const { data: allMovies, loading, error} = useFetch(trendingMovies_URL);
  

  return ( 
    <>
     { loading && <Spinner />}
     { allMovies && <HeroImage allMovies={allMovies}/>}
     { allMovies && <SearchBar />}
     { allMovies && <GridMovies allMovies={allMovies}/>}
    </>
   );
}
 
export default HomePage;