import styled from 'styled-components';

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MainInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Addition = styled.div`
  @media screen and (min-width: 950px) {
    margin-left: 30px;
  }
`;

export const Poster = styled.img`
  border-radius: 7px;
  max-width: 520px;
  max-height: 300px;
  @media screen and (min-width: 950px) {
    margin: auto;
  }
`;

export const MainText = styled.div`
  @media screen and (min-width: 950px) {
    margin-left: 30px;
  }
`;

export const AdditionsUl = styled.ul`
  margin-bottom: 10px;
`;
export const AdditionsLi = styled.li`
  list-style: circle;
  margin-bottom: 10px;
  font-size: 18px;
  a {
    text-decoration: underline dotted;
    color: #7c5400;
  }
`;
export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
`;
export const Genre = styled.li`
  list-style: none;
  padding: 0 6px 0 0;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
`;
