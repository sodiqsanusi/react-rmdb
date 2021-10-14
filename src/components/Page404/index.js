import { Link } from "react-router-dom";
import { Wrapper } from "./Page404Styled";


const Page404 = () => {
  return ( 
    <Wrapper>
      <h1>Hey there...</h1>
      <p>There has been some error loading your page</p>
      <h2>This can be due to:</h2>
      <ul>
        <li>Bad internet connection.</li>
        <li>Search input value is not found</li>
      </ul>
      <h2>Try:</h2>
      <ul>
        <li>Making sure your internet connection is stable.</li>
        <li>Checking if your search input value is correct.</li>
      </ul>

      <Link to='/'><button>Go back to homepage</button></Link>
    </Wrapper>
   );
}
 
export default Page404;