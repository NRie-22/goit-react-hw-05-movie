import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: -20px;
  text-transform: uppercase;
  position: relative;
`;

export const Input = styled.input`
  padding: 4px 32px 4px 24px;
  border-radius: 4px;
  border: 1px solid #7c5400;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 6px;
  right: 6px;
`;
