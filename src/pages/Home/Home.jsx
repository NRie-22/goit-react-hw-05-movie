import { getTrending, STATUS } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import { GoUp } from 'pages/Movies/Movies.styled';
import { HiArrowUp } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { scrollPos, scrollTop, infiniteHeight, boxScroll } from 'utils/scroll';

const Home = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [movies, setMovies] = useState([
    {
      id: 0,
      poster_path: null,
      title: '',
      original_title: '',
      release_date: '',
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const [pages, setPages] = useState(2);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setStatus(STATUS.pending);
    localStorage.setItem('scrollPos', 0);
    async function fetchData() {
      try {
        getTrending(1).then(info => {
          setMovies(info.results);
        });
        setStatus(STATUS.resolved);
      } catch (error) {
        setError(error);
        setStatus(STATUS.rejected);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const arrayOfMovies = await getTrending(pages).then(r => r.results);
        setMovies(i => [...i, ...arrayOfMovies]);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pages]);

  const fetchMoreData = () => {
    setPages(i => i + 1);
  };

  const reachTheEnd = () => {
    if (movies.length !== 0) {
      getTrending(pages).then(info => {
        if (movies.length === info.total_results) {
          setHasMore(false);
        }
      });
    }
  };
  reachTheEnd();

  return (
    <>
      {status === STATUS.resolved && (
        <>
          <h1 style={{ fontSize: '20px' }}>Trending today</h1>
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            initialScrollY={JSON.parse(
              window.localStorage.getItem('scrollPos')
            )}
            height={infiniteHeight()}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all ;D</b>
              </p>
            }
          >
            <MovieList movies={movies} onClick={() => scrollPos(boxScroll())} />
          </InfiniteScroll>
          {boxScroll() > 1000 && (
            <GoUp onClick={() => scrollTop()}>
              UP <HiArrowUp size={24} />
            </GoUp>
          )}
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

export default Home;
