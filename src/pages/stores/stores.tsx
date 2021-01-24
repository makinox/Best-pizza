import React from 'react';
import {DuoContainer, LogOut, PageContainer, PreviewImage} from '../../components';
import {StoresHeader} from './styles';

export default function Login() {
  return (
    <DuoContainer alignY="flex-start">
      <PreviewImage animationTime="30s" />
      <PageContainer margin="20px 20px 0 20px" mediaMargin="20px 0 0 0" alignItems="initial">
        <StoresHeader>
          <LogOut handleAction={() => {}} />
        </StoresHeader>
        <div>
          <span>Pizzerias</span>
        </div>
        <div>
          <h2>Tiendas</h2>
          <span>Escoge tu pizzeria favorita</span>
        </div>
        <div>
          <span>1</span>
          <span>1</span>
          <span>1</span>
          <span>1</span>
        </div>
        <footer>
          <div>
            <span>face</span>
            <span>insta</span>
          </div>
          <div>best</div>
        </footer>
      </PageContainer>
    </DuoContainer>
  );
}
