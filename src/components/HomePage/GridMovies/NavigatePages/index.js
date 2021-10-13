import { MainButton, SmallButton, SmallDiv, Wrapper } from "./NavigatePagesStyled";
import { useContext } from "react";
import { globalContext } from "../../../../globalstates/globalContext";


const NavigatePages = () => {

  const {page, setPage} = useContext(globalContext);

  const changePage = {
    previous: () => setPage(page - 1),
    next: () => setPage(page + 1),
    setByAmount: (e) => setPage(e)
  }

  return ( 
    <Wrapper>
       {page > 1 && <MainButton onClick={changePage.previous}>Previous</MainButton>}
      <SmallDiv>
        <SmallButton page={page} value={1} onClick={() => changePage.setByAmount(1)}>1</SmallButton>
        <SmallButton page={page} value={2} onClick={() => changePage.setByAmount(2)}>2</SmallButton>
        { page > 2 && <SmallButton page={page} value={page}>{page}</SmallButton>}
        { page !== 5 && <SmallButton page={page} value={5} onClick={() => changePage.setByAmount(5)}>5</SmallButton>}
        { page !== 10 && <SmallButton page={page} value={10} onClick={() => changePage.setByAmount(10)}>10</SmallButton>}
      </SmallDiv>
      <MainButton onClick={changePage.next}>Next</MainButton>
    </Wrapper>
   );
}
 
export default NavigatePages;