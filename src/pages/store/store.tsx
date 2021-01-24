import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {ARMcontext} from '../../utils/context/context';
import {ProductI} from '../../utils/interfaces/Product';
import {DuoContainer, Footer, LogOut, PageContainer, PageHeader, PageTree, PizzaCard, PreviewImage, SearchButton} from '../../components';
import {FaAngleRight} from 'react-icons/fa';
import Data from '../../utils/api/Data';
import {StoreI} from '../../utils/interfaces/Store';

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
        finalStoreData = stores.data[0];
      } else {
        alert('Stores cant be fetched');
      }

      useData(finalStoreData);
      useFilter(finalStoreData?.products || []);
    }

    GetStoreData();
  }, [id]);

  function HandleLogOut(): void {
    HandleSignOut();
    history.push('/');
  }

  function HandleSearch() {
    const input = window.prompt('Busca algun producto en particular?');
    useFilter((prev?: Array<ProductI>) => {
      const result = prev?.filter((el: ProductI) => el.name?.toLocaleLowerCase().includes(input?.toLocaleLowerCase() || ''));
      return result || [];
    });
  }

  return (
    <DuoContainer alignY="flex-start">
      <PreviewImage animationTime="30s" />
      <PageContainer margin="20px 0 0 0" mediaMargin="0 0 0 0" alignItems="initial" scrollView={true}>
        <PageHeader>
          <SearchButton handleAction={HandleSearch} />
          <LogOut handleAction={HandleLogOut} />
        </PageHeader>
        <PageTree>
          <span>Pizzerías</span>
          <FaAngleRight />
          <span>{title}</span>
        </PageTree>
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>{data.address}</p>
        </div>
        <div>
          {console.log(filter)}
          {filter?.map((el: ProductI) => (
            <PizzaCard key={el.id} store={el} handleAction={() => {}} />
          ))}
        </div>
        <Footer />
      </PageContainer>
    </DuoContainer>
  );
}
