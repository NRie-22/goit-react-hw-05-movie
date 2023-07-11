import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById, STATUS } from 'serviceAPI/fetch';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ListLi } from './Reviews.styled';

const Reviews = () => {
  const [status, setStatus] = useState(STATUS.idle);
  const [reviews, setReviews] = useState({
    results: [{ id: '', author: '', content: '' }],
  });

  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setStatus(STATUS.pending);
    async function fetchData() {
      try {
        const objectOfreviews = await getMovieReviewsById(id).then(r => r);
        setStatus(STATUS.resolved);
        setReviews(objectOfreviews);
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
          {reviews.results.length !== 0 ? (
            <ul>
              {reviews.results.map(c => {
                return (
                  <ListLi key={c.id}>
                    <h3 style={{ color: 'darkgreen' }}>Author: {c.author}</h3>
                    <p>`{c.content}`</p>
                  </ListLi>
                );
              })}
            </ul>
          ) : (
            <h3>We don`t have any reviews for this movie.</h3>
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

export default Reviews;
