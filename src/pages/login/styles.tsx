import styled from 'styled-components';

export const LoginContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const LoginHeader = styled.div`
  margin-bottom: 20px;

  & img {
    width: 200px;
  }
`;

export const LoginTitles = styled.div`
  text-align: center;

  & h1 {
    font-weight: 500;
    font-size: 40px;
    margin-top: 3px;
    margin-bottom: 0;
  }

  & p {
    color: rgb(112, 112, 112);
    margin-bottom: 25px;
    font-weight: 400;
    margin-top: 10px;
    font-size: 23px;
  }
`;

export const LoginInput = styled.div`
  border: 1px solid rgb(196, 196, 196);
  align-items: center;
  border-radius: 3px;
  max-width: 400px;
  display: flex;
  height: 55px;
  margin: 10px;
  width: 50vw;
  padding: 0;

  & img {
    padding-right: 20px;
    width: 28px;
  }

  & input {
    box-sizing: border-box;
    padding-left: 10px;
    border-radius: 3px;
    border: none;
    height: 100%;
    width: 100%;
  }

  & input::placeholder {
    color: #acb1c0;
  }

  & input:active {
    border: none;
    outline: none;
  }

  & input:focus {
    border: none;
    outline: none;
  }

  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
`;

export const LoginForgot = styled.div`
  text-align: center;
  margin: 40px 0;

  & span {
    font-weight: 500;
  }
`;

export const LoginSubmit = styled.div`
  justify-content: center;
  margin-top: 20px;
  display: flex;
`;
