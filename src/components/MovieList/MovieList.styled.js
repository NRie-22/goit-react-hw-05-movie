import styled from 'styled-components';

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListLi = styled.li`
  position: relative;
  list-style: none;
  width: 270px;
  height: 550px;
  border: 1px solid grey;
  border-radius: 4px;
  margin-bottom: 0px;

  a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  text-align: center;
  padding: 4px;
  margin-top: 12px;
  margin-bottom: 6px;
  color: black;
`;

export const Image = styled.img`
  width: 100%;
  height: 403px;
  display: block;
  border-bottom: 1px solid darkred;
  @media screen and (max-width: 370px) {
    height: 360px;
  }
`;
export const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 500;
  color: brown;
  display: flex;
  gap: 6px;
  padding: 15px 6px 15px 6px;
  justify-content: space-between;
  border-top: 1px dotted;
`;

export const Block = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0 6px 0 0;
  :not(:last-child) {
    border-right: 1px solid grey;
  }

  p {
    margin: 0 0 7px 0;
  }
`;
