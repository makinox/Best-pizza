import styled from 'styled-components';

export const StoresHeader = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const StoresThree = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;

  & span {
    border-bottom: 2px solid var(--YellowPrimary);
    color: var(--TextSecondary);
    font-size: 14px;
    padding: 0 8px;
  }
`;

export const StoresTitles = styled.div`
  & h2 {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  & p {
    color: var(--TextSecondary);
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const CardContainer = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;

  & > article {
    margin-right: 30px;
  }
`;
