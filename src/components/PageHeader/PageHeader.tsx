import React from 'react';
import {Header} from './styles';

export default function PageHeader({children}: {children: React.ReactNode}) {
  return <Header>{children}</Header>;
}
