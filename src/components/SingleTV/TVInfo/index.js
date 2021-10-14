import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg';
import { Content, Wrapper, Text } from "./TVInfoStyled";

const TVInfo = ({tv, TVCredits}) => {
  if (TVCredits) {
    var producers = TVCredits.crew.filter((onecrew) => {
      return onecrew.job === 'Executive Producer';
     })

     var backdrop = `${getImageURL}${tv.backdrop_path}` ;
  }


  return ( 
    <Wrapper backdrop={backdrop}>
      <Content>
        <div className='test'><img src={tv.poster_path? `${getImageURL}${tv.poster_path}` : noImage} alt={`${tv.name} series poster`} /></div>
        <Text>
          <h1>{tv.name}</h1>
          <h3>PLOT</h3>
          <p>{tv.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="rates">{tv.vote_average}</div>
            </div>
            {
              TVCredits && producers.length === 0 ? '' : (
                <div className='directors'>
                  <h3>EXECUTIVE PRODUCER{ TVCredits && producers.length > 1 ? 'S' : ''}</h3>
                  {TVCredits && producers.map((director) => (
                    <p key={director.id}>{director.name}</p>
                  )) }
                </div>
              )
            }
          </div>

         <div className='episode'>
           <h3>LAST EPISODE AIRED</h3>
           <h4>{`Season ${tv.number_of_seasons} Episode ${tv.last_episode_to_air.episode_number}`}</h4>
           <p>{tv.last_episode_to_air.overview}</p>
         </div>
        </Text>
      </Content>
    </Wrapper>
   );
}
 
export default TVInfo;