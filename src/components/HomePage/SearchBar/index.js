import { useState } from 'react';
// THE USEHISTORY REACT HOOK IS USED FOR GOING THROUGH PAGES AUTOMATICALLY
import { useHistory } from 'react-router';
import searchIcon from '../../../images/search-icon.svg'
import { Content, SpanButton, Wrapper } from './SearchBarStyled';

const SearchBar = () => {

   const [query, setQuery] = useState('');
   const history = useHistory();

   const handleQuery = (e) => {
     e.preventDefault();
     history.push(`/search/${query}`)
   }

  return ( 
    <Wrapper htmlFor="searchQuery">
      <Content onSubmit={handleQuery}>
        <SpanButton onClick={() => handleQuery} aria-label="Click to search movie"><img src={searchIcon} alt="" /></SpanButton>
        <input
         id='searchQuery'
         required
         autoComplete='off'
         type='search'
         placeholder='Search for a movie, actor or tv show'
         value={query}
         onChange={(e) => setQuery(e.target.value)}
          />
      </Content>
    </Wrapper>
   );
}
 
export default SearchBar;