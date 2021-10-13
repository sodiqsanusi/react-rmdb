import { searchMultiURL } from "../../APIFiles/APIKeys";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";
import SearchedMoviesGrid from "./SearchedMoviesGrid";
import Spinner from "../HomePage/Spinner";
import SearchBar from "../HomePage/SearchBar";
import { useState } from "react";
import { ContentButton } from "./SearchedMoviesStyled";

const SearchPage = () => {

  const [adultContent, setAdultContent] = useState(false)
  const { query } = useParams();
  const {data: searchedMovies, loading, error} = useFetch(`${searchMultiURL}${adultContent}&query=${query}`);

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