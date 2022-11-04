import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = '438b209afcbf786d00b41cef323b2ca7';

export const fetchTrendingMovies = () => {
  return axios.get(`3/trending/movie/day?api_key=${KEY}`).then(res => {
    return res.data.results;
  });
};

export const fetchMovieDetail = id => {
  return axios.get(`3/movie/${id}?api_key=${KEY}`).then(res => {
    return res.data;
  });
};
