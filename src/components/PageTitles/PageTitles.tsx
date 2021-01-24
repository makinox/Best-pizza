import React from 'react';
import {TitlesContainer} from './styles';

export default function PageTitles({children, dataCy = 'page-titles'}: {children: React.ReactNode; dataCy?: string}) {
  return <TitlesContainer data-cy={dataCy}>{children}</TitlesContainer>;
}
