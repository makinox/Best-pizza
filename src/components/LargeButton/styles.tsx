import styled from 'styled-components';

export const LargeButtonContainer = styled.button`
  box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.1);
  background-color: rgb(242, 197, 93);
  border-radius: 2px;
  max-width: 400px;
  cursor: pointer;
  height: 55px;
  border: none;
  width: 50vw;

  font-size: 16px;
  font-weight: 500;

  &:active {
    border: none;
    outline: none;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
