// IMPORTING THE USEFETCH CUSTOM HOOK TO GET EXTERNAL DATA
import useFetch from "../../hooks/useFetch";
// IMPORTING THE API'S VALUES FROM A REUSABLE .JS FILE
import { trendingMovies_URL } from "../../APIFiles/APIKeys"; 
import HeroImage from "./HeroImage";
import GridMovies from "./GridMovies";

const HomePage = () => {

  const { data: allMovies, loading, error} = useFetch(trendingMovies_URL);
  

  return ( 
    <>
     { allMovies && <HeroImage allMovies={allMovies}/>}
     { allMovies && <GridMovies allMovies={allMovies}/>}
    </>
   );
}
 
export default HomePage;