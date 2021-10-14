import { Button, Wrapper } from "./PreviousPageButtonStyled";
import { useHistory } from "react-router";

const PreviousPageButton = () => {
 
  const history = useHistory();

  function handleClick() {
    history.go(-1)
  }

  return ( 
    <Wrapper><Button onClick={handleClick}>Return To Previous Page</Button></Wrapper>
   );
}
 
export default PreviousPageButton;