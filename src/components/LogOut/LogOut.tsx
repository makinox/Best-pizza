import React from 'react';
import PasswordLogo from '../../assets/ic_contraseõa.png';
import {LogOutContainer} from './styles';

export default function LogOut({handleAction}: {handleAction: () => void}) {
  return (
    <LogOutContainer onClick={handleAction}>
      <img src={PasswordLogo} alt="Log out icon" />
      <span>Salir</span>
    </LogOutContainer>
  );
}
