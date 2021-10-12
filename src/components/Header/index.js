import { Wrapper, Content, LogoImg,TMDBLogoImg } from "./HeaderStyles";
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => {
  return ( 
    <Wrapper>
      <Content>
        <LogoImg>
          <a href="/"><img src={RMDBLogo} alt="The React Movie web app logo" /></a>
        </LogoImg>
        <TMDBLogoImg>
         <img src={TMDBLogo} alt="The attribution to the movie database" />
        </TMDBLogoImg>
      </Content>
    </Wrapper>
   );
}
 
export default Header;