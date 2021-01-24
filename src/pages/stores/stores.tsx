import React, {useContext, useEffect, useState} from 'react';
import Data from '../../utils/api/Data';
import {useHistory} from 'react-router-dom';
import {StoreI} from '../../utils/interfaces/Store';
import {ARMcontext} from '../../utils/context/context';
import {
  CardContainer,
  DuoContainer,
  Footer,
  LogOut,
  PageContainer,
  PageHeader,
  PageTitles,
  PageTree,
  PizzaCard,
  PreviewImage,
  SearchButton,
} from '../../components';

import Img1 from '../../assets/Panos_pizza.png';
import Img2 from '../../assets/Sbarro.png';
import Img3 from '../../assets/pizzeria_camion.png';
import Img4 from '../../assets/voglia_di_pizza.png';
import Img5 from '../../assets/stroller_pizza.png';
import Img6 from '../../assets/trulli.png';
const Images = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function Login() {
  const [data, useData] = useState<Array<StoreI>>([]);
  const [filter, useFilter] = useState<Array<StoreI>>(data);
  const {HandleSignOut} = useContext(ARMcontext);
  const history = useHistory();

  useEffect(() => {
    GetStoresData();
  }, []);

  async function GetStoresData(): Promise<void> {
    const DATA = new Data();
    const stores = await DATA.getStores();
    const finalStoreData = [];

    if (stores.status) {
      const extraMuted = JSON.parse(JSON.stringify(stores.data[0]));
      extraMuted.id = 6;
      stores.data.push(extraMuted);
      finalStoreData.push(...stores.data);
    } else {
      alert('Stores cant be fetched');
    }

    useData(finalStoreData);
    useFilter(finalStoreData);
  }

  function HandleLogOut(): void {
    HandleSignOut();
    history.push('/');
  }

  function HandleSearch(): void {
    const input = window.prompt('Busca alguna tienda en particular?');
    useFilter(prev => {
      return prev.filter((el: StoreI) => el.name?.toLocaleLowerCase().includes(input?.toLocaleLowerCase() || ''));
    });
  }

  function HandleCard(store?: StoreI): void {
    history.push(`/tienda/${store?.name?.replaceAll(' ', '-')}/${store?.id}`);
  }

  return (
    <DuoContainer alignY="flex-start">
      <PreviewImage animationTime="30s" />
      <PageContainer padding="26px 0 0 0" mediaMargin="10px 0 0 0" alignItems="initial" scrollView={true}>
        <PageHeader>
          <SearchButton handleAction={HandleSearch} />
          <LogOut handleAction={HandleLogOut} />
        </PageHeader>
        <PageTree>
          <span>Pizzerías</span>
        </PageTree>
        <PageTitles>
          <h2>Tiendas</h2>
          <p>Escoge tu pizzeria favorita</p>
        </PageTitles>
        <CardContainer>
          {filter.map((el: StoreI) => (
            <PizzaCard key={el.id} store={el} handleAction={HandleCard} cardImages={Images} />
          ))}
        </CardContainer>
        <Footer />
      </PageContainer>
    </DuoContainer>
  );
}
