import { Wrapper, Content, LogoImg,TMDBLogoImg } from "./HeaderStyles";
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <Wrapper>
      <Content>
        <LogoImg>
          <Link to="/"><img src={RMDBLogo} alt="The React Movie web app logo" /></Link>
        </LogoImg>
        <TMDBLogoImg>
         <img src={TMDBLogo} alt="The attribution to the movie database" />
        </TMDBLogoImg>
      </Content>
    </Wrapper>
   );
}
 
export default Header;