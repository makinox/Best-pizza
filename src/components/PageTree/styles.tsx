import styled from 'styled-components';

export const Three = styled.div`
  margin-bottom: 20px;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
  display: flex;

  & svg {
    color: var(--TextSecondary);
  }

  & span {
    border-bottom: 2px solid var(--YellowPrimary);
    color: var(--TextSecondary);
    font-size: 14px;
    padding: 0 8px;
  }
`;
