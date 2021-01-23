import React from 'react';
import {DuoContainer} from '../../components';

export default function Login() {
  return (
    <DuoContainer>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>Bienvenido</h1>
          <p>A las mejores pizzas del país</p>
        </div>
        <form onSubmit={() => {}}>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <span>¿Olvidaste tu contraseña?</span>
          </div>
          <div>
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </DuoContainer>
  );
}
