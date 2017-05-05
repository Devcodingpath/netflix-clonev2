import axios from 'axios';

export const FETCH_UPCOMING = 'FETCH_UPCOMING';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_MOVIE = 'FETCH_MOVIE';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=4aa4b9188953c7d30dab858a0d3ac36e'

export function fetchUpComing() {
  const request = axios.get(`${ROOT_URL}/movie/upcoming?${API_KEY}`);
  return {
    type: FETCH_UPCOMING,
    payload: request
  };
}

export function fetchSearch(search) {
  const request = axios.get(`${ROOT_URL}/search/movie?${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`);
  return {
    type: FETCH_SEARCH,
    payload: request
  };
}

export function fetchMovie(id) {
  const request = axios.get(`${ROOT_URL}/movie/${id}?${API_KEY}`);
  return {
    type: FETCH_MOVIE,
    payload: request
  };
}
