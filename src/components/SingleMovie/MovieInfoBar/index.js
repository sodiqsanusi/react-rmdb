import { Content, Wrapper, Text } from "./MovieInfoBarStyled";


const MovieInfoBar = ({movie}) => {
   
    if (movie) {
      const movieDuration = (time) => {
        const hour = Math.floor(time / 60) ;
        const mins = time % 60 ;
        return `${hour ? `${hour} ${hour > 1 ? 'hours' : 'hour'}` : ''}  ${mins ? `${mins} ${mins > 1 ? 'minutes' : 'minute'}` : ''}` ;
       }
       const cash = (money) => {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        });
        return formatter.format(money);
       }


      var budget = cash(movie.budget)   
      var revenue = cash(movie.revenue)
      var runtime = movieDuration(movie.runtime)
    }

  return ( 
    <Wrapper>
      { movie && (
      <Content>
        <Text>
          Movie Duration : {runtime}
        </Text>
        <Text>
          Budget : {budget}
        </Text>
        <Text>
          Revenue : {revenue}
        </Text>
      </Content>
      )}
    </Wrapper>
   );
}
 
export default MovieInfoBar;