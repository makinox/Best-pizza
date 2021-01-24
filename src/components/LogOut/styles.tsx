import styled from 'styled-components';

export const LogOutContainer = styled.div`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;

  & img {
    height: 25px;
  }

  & span {
    color: var(--TextSecondary);
    width: max-content;
    font-size: 12px;
  }
`;
