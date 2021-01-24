import React, {useContext, useEffect, useState} from 'react';
import {ProductI} from '../../utils/interfaces/Product';
import {useHistory, useParams} from 'react-router-dom';
import {ARMcontext} from '../../utils/context/context';
import {StoreI} from '../../utils/interfaces/Store';
import {FaAngleRight} from 'react-icons/fa';
import Data from '../../utils/api/Data';
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

import Img1 from '../../assets/panos_pizza_1.png';
import Img2 from '../../assets/sbarro_pizza.png';
import Img3 from '../../assets/pizzeria_camion_pizza.png';
import Img4 from '../../assets/vogliadipizza_pizza.png';
import Img5 from '../../assets/stroller_pizza_1.png';
import Img6 from '../../assets/trulli_pizza.png';
const Images = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function Login() {
  const {HandleSignOut} = useContext(ARMcontext);
  const {id, title} = useParams<{id?: string; title?: string}>();
  const history = useHistory();

  const [data, useData] = useState<StoreI>({});
  const [filter, useFilter] = useState<Array<ProductI>>(data?.products || []);

  useEffect(() => {
    async function GetStoreData(): Promise<void> {
      const DATA = new Data();
      const stores = await DATA.getStore(parseInt(id || '0'));
      let finalStoreData: StoreI = {};

      if (stores.status) {
        if (stores.data[0]) {
          finalStoreData = stores.data[0];
        } else {
          history.push('/tiendas');
          alert('This store is not available');
        }
      } else {
        alert('Stores cant be fetched');
      }

      useData(finalStoreData);
      useFilter(finalStoreData?.products || []);
    }

    if (!id?.length) {
      history.push('/tiendas');
    }

    GetStoreData();
  }, [id, history]);

  function HandleLogOut(): void {
    HandleSignOut();
    history.push('/');
  }

  function HandleSearch() {
    const input = window.prompt('Busca algun producto en particular?');
    useFilter(() => {
      const result = data.products?.filter((el: ProductI) => el.name?.toLocaleLowerCase().includes(input?.toLocaleLowerCase() || ''));
      return result || [];
    });
  }

  function HandleBack() {
    history.push('/tiendas');
  }

  return (
    <DuoContainer alignY="flex-start">
      <PreviewImage animationTime="30s" />
      <PageContainer margin="20px 0 0 0" mediaMargin="10px 0 0 0" alignItems="initial" scrollView={true}>
        <PageHeader>
          <SearchButton handleAction={HandleSearch} />
          <LogOut handleAction={HandleLogOut} />
        </PageHeader>
        <PageTree>
          <span onClick={HandleBack}>Pizzerías</span>
          <FaAngleRight />
          <span>{title}</span>
        </PageTree>
        <PageTitles>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>{data.address}</p>
        </PageTitles>
        <CardContainer>
          {filter?.map((el: ProductI) => (
            <PizzaCard key={el.id} store={el} handleAction={() => {}} cardImages={Images} />
          ))}
        </CardContainer>
        <Footer />
      </PageContainer>
    </DuoContainer>
  );
}
