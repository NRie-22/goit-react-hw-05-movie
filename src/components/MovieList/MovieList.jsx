import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieName,
  Image,
  Description,
  ListUl,
  ListLi,
  Block,
} from './MovieList.styled';

const MovieList = ({ movies, onClick }) => {
  const location = useLocation();

  return (
    <ListUl>
      {movies.map(movie => (
        <ListLi key={movie.id}>
          {location.pathname === '/movies' ? (
            <Link
              onClick={onClick}
              to={`${movie.id}`}
              state={{ from: location }}
            >
              {movie.poster_path !== null ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="100px"
                />
              ) : (
                <Image
                  src={
                    'https://resources.arcamax.com/newspics/240/24034/2403468.png'
                  }
                  alt={movie.title}
                  width="100px"
                />
              )}

              {movie.original_title.length > 45 ? (
                <MovieName>
                  {movie.original_title.slice(0, 45) + '...'}
                </MovieName>
              ) : (
                <MovieName>{movie.original_title}</MovieName>
              )}

              <Description>
                <Block>
                  <p>Release date:</p>
                  {movie.release_date !== '' ? (
                    <p>{movie.release_date.split('-').reverse().join('.')}</p>
                  ) : (
                    <p>unknown</p>
                  )}
                </Block>
                <Block>
                  <p> Rate:</p>
                  <p>{Math.round(movie.vote_average * 10) / 10}</p>
                </Block>
                <Block>
                  <p> Vote count:</p>
                  <p>{movie.vote_count}</p>
                </Block>
              </Description>
            </Link>
          ) : (
            <Link
              onClick={onClick}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.poster_path !== null ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="100px"
                />
              ) : (
                <Image
                  src={
                    'https://resources.arcamax.com/newspics/240/24034/2403468.png'
                  }
                  alt={movie.title}
                  width="100px"
                />
              )}

              {movie.original_title.length > 45 ? (
                <MovieName>
                  {movie.original_title.slice(0, 45) + '...'}
                </MovieName>
              ) : (
                <MovieName>{movie.original_title}</MovieName>
              )}

              <Description>
                <Block>
                  <p>Release date:</p>
                  <p>{movie.release_date.split('-').reverse().join('.')}</p>
                </Block>
                <Block>
                  <p> Rate:</p>
                  <p>{Math.round(movie.vote_average * 10) / 10}</p>
                </Block>
                <Block>
                  <p> Vote count:</p>
                  <p>{movie.vote_count}</p>
                </Block>
              </Description>
            </Link>
          )}
        </ListLi>
      ))}
    </ListUl>
  );
};

export default MovieList;

MovieList.propTypes = {
  onClick: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]),
      ]),
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ),
};
