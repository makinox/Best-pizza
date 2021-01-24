import React from 'react';
import {TitlesContainer} from './styles';

export default function PageTitles({children}: {children: React.ReactNode}) {
  return <TitlesContainer>{children}</TitlesContainer>;
}
