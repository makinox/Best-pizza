import React from 'react';
import {WrapperContainer} from './styles';

export default function PageWrapper({children}: {children: React.ReactNode}) {
  return <WrapperContainer>{children}</WrapperContainer>;
}
