import {useContext, useState} from 'react';
import Auth from '../../utils/api/Auth';
import {useHistory} from 'react-router-dom';
import UsuarioLogo from '../../assets/ic_usuario.png';
import {ARMcontext} from '../../utils/context/context';
import PasswordLogo from '../../assets/ic_contraseõa.png';
import PizzaLogo from '../../assets/Login-Best-Pizza.png';
import {useInputValue} from '../../utils/hooks/useInputValue';
import {DuoContainer, LargeButton, PageContainer, PreviewImage} from '../../components';
import {LoginForgot, LoginHeader, LoginInput, LoginSubmit, LoginTitles} from './styles';

export default function Login() {
  const {HandleUser} = useContext(ARMcontext);
  const history = useHistory();

  const [animation, useAnimation] = useState<string>('30s');
  const UserName = useInputValue({});
  const Password = useInputValue({type: 'password'});

  async function HandleLogin(e: any): Promise<void> {
    e.preventDefault();
    useAnimation('3s');

    const AUTH = new Auth();
    const response = await AUTH.login(UserName.value, Password.value);
    if (response.status) {
      history.push('/tiendas');
      HandleUser(response.data);
    } else {
      alert(response.data.name);
    }
  }

  return (
    <DuoContainer alignY="center" background={true}>
      <PreviewImage animationTime={animation} />
      <PageContainer padding="0 0 0 0" mediaMargin="50px 0 0 0" scrollView={false}>
        <LoginHeader>
          <img src={PizzaLogo} alt="Best pizza logo" />
        </LoginHeader>
        <LoginTitles>
          <h1>Bienvenido</h1>
          <p>A las mejores pizzas del país</p>
        </LoginTitles>
        <form onSubmit={HandleLogin} cy-data="login-form">
          <LoginInput>
            <input placeholder="Email" {...UserName} />
            <img src={UsuarioLogo} alt="Input username logo" />
          </LoginInput>
          <LoginInput>
            <input placeholder="Contraseña" {...Password} />
            <img src={PasswordLogo} alt="Input password logo" />
          </LoginInput>
          <LoginForgot>
            <span>¿Olvidaste tu contraseña?</span>
          </LoginForgot>
          <LoginSubmit>
            <LargeButton handleAction={HandleLogin} type="submit" text="Iniciar sesión" />
          </LoginSubmit>
        </form>
      </PageContainer>
    </DuoContainer>
  );
}
