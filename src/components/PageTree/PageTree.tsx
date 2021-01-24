import React from 'react';
import {Three} from './styles';

export default function PageTree({children, dataCy = 'page-tree'}: {children: React.ReactNode; dataCy?: string}) {
  return <Three data-cy={dataCy}>{children}</Three>;
}
