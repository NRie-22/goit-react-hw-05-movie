import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { getMovieById, STATUS } from 'serviceAPI/fetch';

import {
  FirstWrapper,
  MainInfo,
  Poster,
  MainText,
  Addition,
  AdditionsLi,
  AdditionsUl,
  Genres,
  Genre,
} from './MovieDetails.styled';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [movie, setMovie] = useState({
    backdrop_path: null,
    id: 0,
    poster_path: null,
    title: '',
    original_title: '',
    release_date: '',
    vote_average: 0,
    vote_count: 0,
    overview: '',
    genres: [{ id: 0, name: '' }],
  });
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setStatus(STATUS.pending);
    async function fetchData() {
      try {
        const objectOfMovie = await getMovieById(id).then(r => r);

        setMovie(objectOfMovie);
        setStatus(STATUS.resolved);
      } catch (error) {
        setError(error);
        setStatus(STATUS.rejected);
      }
    }
    fetchData();
  }, [id]);
  const location = useLocation();

  const backLink = () => {
    if (location.state === null) {
      return { pathname: '/', search: '' };
    }
    if (location.state.from.state === null) {
      const locationSearch =
        location.state.from.state === null
          ? location.state.from.search
          : location.state.from.state.from.search;

      const backLinkHrefSearch =
        location.pathname === '/movies' ||
        `/movies/${id}` ||
        `/movies/${id}/cast` ||
        `/movies/${id}/reviews`
          ? {
              locationSearch,
            } ?? '/movies'
          : location.state?.from ?? '/';

      const pathname =
        location.state.from.state === null
          ? location.state.from.pathname
          : location.state.from.state.from.pathname;

      const backLinkHrefPathname = pathname === '/' ? '/' : '/movies';
      return {
        pathname: backLinkHrefPathname,
        search: backLinkHrefSearch.locationSearch,
      };
    }
    if (location.state.from.state.from.state === null) {
      const locationSearch =
        location.state.from.state.from.state === null
          ? location.state.from.state.from.search
          : location.state.from.state.from.state.from.search;

      const backLinkHrefSearch =
        location.pathname === '/movies' ||
        `/movies/${id}` ||
        `/movies/${id}/cast` ||
        `/movies/${id}/reviews`
          ? {
              locationSearch,
            } ?? '/movies'
          : location.state?.from ?? '/';

      const pathname =
        location.state.from.state.from.state === null
          ? location.state.from.state.from.pathname
          : location.state.from.state.from.state.from.pathname;

      const backLinkHrefPathname = pathname === '/' ? '/' : '/movies';

      return {
        pathname: backLinkHrefPathname,
        search: backLinkHrefSearch.locationSearch,
      };
    }
    if (location.state.from.state.from.state.from.state === null) {
      const locationSearch =
        location.state.from.state.from.state.from.state === null
          ? location.state.from.state.from.state.from.search
          : location.state.from.state.from.state.from.state.from.search;

      const backLinkHrefSearch =
        location.pathname === '/movies' ||
        `/movies/${id}` ||
        `/movies/${id}/cast` ||
        `/movies/${id}/reviews`
          ? {
              locationSearch,
            } ?? '/movies'
          : location.state?.from ?? '/';

      const pathname =
        location.state.from.state.from.state.from.state === null
          ? location.state.from.state.from.state.from.pathname
          : location.state.from.state.from.state.from.state.from.pathname;

      const backLinkHrefPathname = pathname === '/' ? '/' : '/movies';

      return {
        pathname: backLinkHrefPathname,
        search: backLinkHrefSearch.locationSearch,
      };
    }
  };

  return (
    <>
      {status === STATUS.resolved && (
        <>
          <BackLink to={backLink()}>Back to movies</BackLink>
          <FirstWrapper>
            <MainInfo>
              {movie.backdrop_path !== null ? (
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
              ) : (
                <Poster
                  src={
                    'https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png'
                  }
                  alt={movie.title}
                />
              )}
              <MainText>
                {movie.release_date !== '' ? (
                  <h1>
                    {movie.original_title} ({movie.release_date.slice(0, 4)})
                  </h1>
                ) : (
                  <h1>{movie.original_title}</h1>
                )}
                <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <Genres>
                  {movie.genres.map(genre => (
                    <Genre key={genre.id}> {genre.name}</Genre>
                  ))}
                </Genres>
              </MainText>
            </MainInfo>
            <Addition>
              <h3>Additional information</h3>
              <AdditionsUl>
                <AdditionsLi>
                  <Link to="cast" state={{ from: location }}>
                    Cast
                  </Link>
                </AdditionsLi>
                <AdditionsLi>
                  <Link to="reviews" state={{ from: location }}>
                    Reviews
                  </Link>
                </AdditionsLi>
              </AdditionsUl>
            </Addition>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </FirstWrapper>
        </>
      )}
      {status === STATUS.rejected && (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
      {status === STATUS.pending && (
        <h3>Please wait, information is loading...</h3>
      )}
    </>
  );
};

export default MovieDetails;
