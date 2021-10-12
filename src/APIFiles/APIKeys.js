

export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.REACT_APP_API_KEY;

export const trendingMovies_URL = `${API_URL}trending/all/day?api_key=${API_KEY}`
export const searchMultiURL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=`




