
// THIS ARE HELPER FILES TO MAKE FETCHING DATA FROM TMDB MORE EASY
// THEIR CONST NAMES ARE SELF-EXPLANATORY; I THINK
export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = process.env.REACT_APP_API_KEY;

export const trendingMovies_URL = `${API_URL}trending/all/day?api_key=${API_KEY}`
export const searchMultiURL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&include_adult=`
export const getImageURL = `https://image.tmdb.org/t/p/w1280/`
export const getSingleMovieURL = `https://api.themoviedb.org/3/movie/`
export const getSingleTVURL = `https://api.themoviedb.org/3/tv/`



