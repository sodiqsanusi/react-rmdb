import { searchMultiURL } from "../../APIFiles/APIKeys";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";
import SearchedMoviesGrid from "./SearchedMoviesGrid";
import Spinner from "../HomePage/Spinner";
import SearchBar from "../HomePage/SearchBar";


const SearchPage = () => {

  const { query } = useParams();
  const {data: searchedMovies, loading, error} = useFetch(`${searchMultiURL}${query}`);

  return (
    <>
    {loading && <Spinner />}
    { searchedMovies && <SearchBar />}
    { searchedMovies && <SearchedMoviesGrid searchedMovies={searchedMovies} query={query}/> }
    </>
   );
}
 
export default SearchPage;