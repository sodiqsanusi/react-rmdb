import { Link } from "react-router-dom";
import { Content, Wrapper } from "./TVHeaderStyled";

const TVHeader = ({title}) => {
  return ( 
    <Wrapper>
      <Content>
        <Link to='/'>Home</Link>
        <span>|</span>
        <span>{title}</span>
      </Content>
    </Wrapper>
   );
}
 
export default TVHeader;