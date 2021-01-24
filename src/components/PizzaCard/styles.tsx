import styled from 'styled-components';

export const PizzaCardContainer = styled.article`
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: scale(1.05);
  }

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
