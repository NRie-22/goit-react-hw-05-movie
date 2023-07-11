import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById, STATUS } from 'serviceAPI/fetch';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ListLi, ListUl } from './Cast.styled';

const Cast = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [cast, setCast] = useState({
    cast: [
      {
        id: 0,
        profile_path: '',
        name: '',
        original_name: '',
        character: '',
      },
    ],
  });
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setStatus(STATUS.pending);
    async function fetchData() {
      try {
        const objectOfCast = await getMovieCastById(id).then(r => r);
        setCast(objectOfCast);
        setStatus(STATUS.resolved);
      } catch (error) {
        setError(error);
        setStatus(STATUS.rejected);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      {status === STATUS.resolved && (
        <Container>
          {cast.cast.length !== 0 ? (
            <ListUl>
              {cast.cast.map(c => {
                return (
                  <ListLi key={c.id}>
                    {c.profile_path !== null ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                        alt={c.name}
                        width="100px"
                      />
                    ) : (
                      <img
                        src={
                          'https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png'
                        }
                        alt={c.name}
                        width="100px"
                      />
                    )}

                    <h6>{c.original_name}</h6>
                    <p>Character:</p>
                    <p>{c.character}</p>
                  </ListLi>
                );
              })}
            </ListUl>
          ) : (
            <h3>We don`t have list of actors for this movie.</h3>
          )}
        </Container>
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

export default Cast;
