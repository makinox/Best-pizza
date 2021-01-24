import React, {useContext, useEffect, useState} from 'react';
import Data from '../../utils/api/Data';
import {useHistory} from 'react-router-dom';
import {StoreI} from '../../utils/interfaces/Store';
import {CardContainer, StoresHeader, StoresThree, StoresTitles} from './styles';
import {DuoContainer, Footer, LogOut, PageContainer, PizzaCard, PreviewImage} from '../../components';
import {ARMcontext} from '../../utils/context/context';

export default function Login() {
  const [data, useData] = useState<Array<StoreI>>([]);
  const {HandleSignOut} = useContext(ARMcontext);
  const history = useHistory();

  useEffect(() => {
    GetStoresData();
  }, []);

  async function GetStoresData(): Promise<void> {
    const DATA = new Data();
    const stores = await DATA.getData();
    useData(() => {
      if (stores.status) {
        const extraMuted = JSON.parse(JSON.stringify(stores.data[0]));
        extraMuted.id = 6;
        stores.data.push(extraMuted);
        return stores.data;
      } else {
        alert('Stores cant be fetched');
        return [];
      }
    });
  }

  function HandleLogOut(): void {
    HandleSignOut();
    history.push('/');
  }

  return (
    <DuoContainer alignY="flex-start">
      <PreviewImage animationTime="30s" />
      <PageContainer margin="20px 0 0 0" mediaMargin="0 0 0 0" alignItems="initial">
        <StoresHeader>
          <LogOut handleAction={HandleLogOut} />
        </StoresHeader>
        <StoresThree>
          <span>Pizzerías</span>
        </StoresThree>
        <StoresTitles>
          <h2>Tiendas</h2>
          <p>Escoge tu pizzeria favorita</p>
        </StoresTitles>
        <CardContainer>
          {data.map((el: StoreI) => (
            <PizzaCard key={el.id} store={el} />
          ))}
        </CardContainer>
        <Footer />
      </PageContainer>
    </DuoContainer>
  );
}
