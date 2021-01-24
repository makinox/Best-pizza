import styled from 'styled-components';

export const Container = styled.div`
  justify-content: flex-start;
  margin-bottom: 35px;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 10px;
  min-height: 505px;
  overflow-y: auto;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 1133px) {
    margin-bottom: 0;
  }

  @media (max-width: 766px) {
    justify-content: center;
    padding-left: 0;

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
