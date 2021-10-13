// GETTING AN API FROM THE HELPER FILE SO I CAN MAKE SEARCH QUERIES.
import { searchMultiURL } from "../../APIFiles/APIKeys";
import useFetch from "../../hooks/useFetch";
import { useHistory, useParams } from "react-router";
import SearchedMoviesGrid from "./SearchedMoviesGrid";
import Spinner from "../HomePage/Spinner";
import SearchBar from "../HomePage/SearchBar";
import { useState } from "react";
import { ContentButton } from "./SearchedMoviesStyled";

const SearchPage = () => {

  const [adultContent, setAdultContent] = useState(false)
  const { query } = useParams();
  const {data: searchedMovies, loading, error} = useFetch(`${searchMultiURL}${adultContent}&query=${query}`);
  const history = useHistory();
  // TO REDIRECT TO THE 404 PAGE IF THERE IS A FETCH ERROR OR IF
  // THE SEARCH QUERY HAS NO RESULT
  if( (searchedMovies && searchedMovies.total_results === 0) || error ){
    history.push('/404');
  }
   
  return (
    <>
    { searchedMovies && <SearchBar />}
    { loading && <Spinner />}
    { searchedMovies && <ContentButton adultContent={adultContent} onClick={() => setAdultContent(!adultContent)}>{adultContent ? 'Remove Adult Content' : 'Include Adult Content'} </ContentButton> }
    { searchedMovies && <SearchedMoviesGrid searchedMovies={searchedMovies} query={query}/> }
    </>
   );
}
 
export default SearchPage;