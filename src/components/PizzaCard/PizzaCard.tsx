import React from 'react';
import {PizzaCardContainer} from './styles';
import {StoreI} from '../../utils/interfaces/Store';

export default function PizzaCard({
  store,
  handleAction,
  cardImages,
}: {
  store: StoreI;
  handleAction: (e?: StoreI) => void;
  cardImages: Array<string>;
}) {
  return (
    <PizzaCardContainer onClick={() => handleAction(store)}>
      <img src={cardImages[(store.id || 1) - 1]} alt={`${store.name} store`} />
      <h6>{store.name}</h6>
      <span>{store.address}</span>
    </PizzaCardContainer>
  );
}
