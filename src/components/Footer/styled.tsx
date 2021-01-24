import styled from 'styled-components';

export const FooterContainer = styled.footer`
  justify-content: space-between;
  color: var(--BackgroundColor);
  background-color: #1f1f1f;
  align-items: center;
  padding: 18px 30px;
  display: flex;
`;

export const FooterContainerDetail = styled.div`
  & a {
    color: var(--BackgroundColor);
    margin-left: 10px;
  }

  & img {
    width: 50px;
  }
`;
