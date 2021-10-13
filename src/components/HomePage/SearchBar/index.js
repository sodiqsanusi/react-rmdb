import { useState } from 'react';
import { useHistory } from 'react-router';
import searchIcon from '../../../images/search-icon.svg'
import { Content, Wrapper } from './SearchBarStyled';

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
        <img src={searchIcon} alt="" />
        <input
         id='searchQuery'
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