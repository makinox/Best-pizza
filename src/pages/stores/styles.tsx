import styled from 'styled-components';

export const StoresHeader = styled.div`
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  display: flex;

  & > div {
    margin-left: 20px;
  }
`;

export const StoresThree = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 10px;

  & span {
    border-bottom: 2px solid var(--YellowPrimary);
    color: var(--TextSecondary);
    font-size: 14px;
    padding: 0 8px;
  }
`;

export const StoresTitles = styled.div`
  margin-left: 20px;

  & h2 {
    margin-bottom: 10px;
    margin-top: 5px;
  }

  & p {
    color: var(--TextSecondary);
    margin-bottom: 40px;
    margin-top: 0;
  }
`;

export const CardContainer = styled.div`
  justify-content: flex-start;
  margin-bottom: 35px;
  margin-right: 20px;
  margin-left: 20px;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 766px) {
    justify-content: center;

    & > article {
      margin-right: 15px !important;
      margin-left: 15px;
    }
  }

  & > article {
    margin-bottom: 20px;
    margin-right: 30px;
  }
`;
