import styled from 'styled-components';

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListLi = styled.li`
  width: 200px;
  height: 420px;
  list-style: none;
  border: 1px solid grey;
  border-radius: 7px;
  img {
    width: 100%;
    height: 297px;
    border-radius: 7px;
  }
  h6 {
    margin: 0 0 10px 0;
    padding: 7px;
    font-size: 18px;
    text-align: center;
  }
  p {
    margin: 0 0 3px 10px;
    padding: 3px;
    text-align: center;
  }
`;
