import React from 'react';
import {SearchIcon} from './styles';

export default function SearchButton({handleAction}: {handleAction: () => void}) {
  return <SearchIcon onClick={handleAction} />;
}
