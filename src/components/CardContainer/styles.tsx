import styled from 'styled-components';

export const Container = styled.div`
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