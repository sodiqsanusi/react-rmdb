import { getImageURL } from "../../../APIFiles/APIKeys";
import noImage from '../../../images/no_image.jpg';

const TVInfo = ({tv, TVCredits}) => {
  if (TVCredits) {
    var producers = TVCredits.crew.filter((onecrew) => {
      return onecrew.job === 'Executive Producer';
     })
  }
  console.log(producers)


  return ( 
    <section>
      <div><img src={tv.poster_path? `${getImageURL}${tv.poster_path}` : noImage} alt={`${tv.name} series poster`} /></div>
      <div>
        <h1>{tv.name}</h1>
        <h3>PLOT</h3>
        <p>{tv.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="rates">{tv.vote_average}</div>
          </div>
          {
            TVCredits && producers.length && (
              <div>
                <h3>EXECUTIVE PRODUCER{ TVCredits && producers.length > 1 ? 'S' : ''}</h3>
                {TVCredits && producers.map((director) => (
                  <p key={director.id}>{director.name}</p>
                )) }
              </div>
            )
          }
        </div>
      </div>
    </section>
   );
}
 
export default TVInfo;