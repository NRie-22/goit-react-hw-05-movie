const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd6c8bc24343fa3661f3ecd9ccf01718c';

export async function getTrending(page) {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  return response.json();
}
export const getMovieById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );

  return response.json();
};

export const getMovieCastById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return response.json();
};

export const getMovieReviewsById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return response.json();
};

export async function getSearchByKeyWord(query, page) {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );

  return response.json();
}

export const STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};
