import styled from 'styled-components';

export const PizzaCardContainer = styled.article`
  cursor: pointer;

  & img {
    width: 180px;
  }

  & h6 {
    margin-bottom: 0;
    font-weight: 500;
    margin-top: 5px;
    font-size: 15px;
  }

  & span {
    color: var(--TextSecondary);
    font-size: 12px;
  }
`;
