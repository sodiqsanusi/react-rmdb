// IMPORTING THE USEFETCH CUSTOM HOOK TO GET EXTERNAL DATA.
import useFetch from "../../hooks/useFetch";
// IMPORTING THE API'S VALUES FROM A REUSABLE .JS FILE.
import { trendingMovies_URL } from "../../APIFiles/APIKeys";
// IMPORTING ALL COMPONENTS USED IN THIS SUB-PARENT COMPONENT.
import HeroImage from "./HeroImage";
import GridMovies from "./GridMovies";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { globalContext } from "../../globalstates/globalContext";
import { useHistory } from "react-router";

const HomePage = () => {

  const { page} = useContext(globalContext);
  const { data: allMovies, loading, error} = useFetch(`${trendingMovies_URL}&page=${page}`);
  const history = useHistory();
// THIS IS TO REDIRECT TO A 404 PAGE IF THE USEFETCH HOOK RETURNS AN ERROR
// FROM GETTING THE DATA.
  if (error) {
    history.push('/404');
  }
  

  return ( 
    <>
     { loading && <Spinner />}
     { allMovies && !loading && <HeroImage allMovies={allMovies}/>}
     { allMovies && !loading && <SearchBar />}
     { allMovies && !loading && <GridMovies allMovies={allMovies}/>}
    </>
   );
}
 
export default HomePage;