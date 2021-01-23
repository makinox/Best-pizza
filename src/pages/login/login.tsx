import React from 'react';
import UsuarioLogo from '../../assets/ic_usuario.png';
import PasswordLogo from '../../assets/ic_contraseõa.png';
import PizzaLogo from '../../assets/Login-Best-Pizza.png';
import {DuoContainer, LargeButton, PreviewImage} from '../../components';
import {LoginContainer, LoginForgot, LoginHeader, LoginInput, LoginSubmit, LoginTitles} from './styles';

export default function Login() {
  return (
    <DuoContainer alignY="center">
      <PreviewImage animationTime="30s" />
      <LoginContainer>
        <LoginHeader>
          <img src={PizzaLogo} alt="Best pizza logo" />
        </LoginHeader>
        <LoginTitles>
          <h1>Bienvenido</h1>
          <p>A las mejores pizzas del país</p>
        </LoginTitles>
        <form onSubmit={() => {}}>
          <LoginInput>
            <input type="text" placeholder="Usuario" />
            <img src={UsuarioLogo} alt="Input username logo" />
          </LoginInput>
          <LoginInput>
            <input type="text" placeholder="Contraseña" />
            <img src={PasswordLogo} alt="Input password logo" />
          </LoginInput>
          <LoginForgot>
            <span>¿Olvidaste tu contraseña?</span>
          </LoginForgot>
          <LoginSubmit>
            <LargeButton type="submit" text="Iniciar sesión" />
          </LoginSubmit>
        </form>
      </LoginContainer>
    </DuoContainer>
  );
}
