import React from 'react';
import {Header} from './styles';

export default function PageHeader({children, dataCy = 'page-header'}: {children: React.ReactNode; dataCy?: string}) {
  return <Header data-cy={dataCy}>{children}</Header>;
}
