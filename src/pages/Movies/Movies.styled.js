import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  margin-left: -400px;
  padding: 0;
`;

export const GoUp = styled.button`
  position: fixed;
  bottom: 50px;
  left: 10px;
  background-color: rgb(136 74 9);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 400px) {
    bottom: 100px;
    left: 350px;
  }
  @media screen and (min-width: 500px) {
    left: 450px;
  }
  @media screen and (min-width: 659px) {
    left: 90vw;
  }
  @media screen and (min-width: 952px) {
    left: 95vw;
  }
  @media screen and (min-width: 1200px) {
    left: 90vw;
  }
`;

export const Message = styled.h3`
  font-weight: 700;
`;
