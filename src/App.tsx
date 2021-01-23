import React from 'react';
import {GlobalStyles} from './components';
import {ARMprovider} from './utils/context/context';
import Navigation from './utils/navigation/navigation';

export default function App() {
  return (
    <ARMprovider>
      <GlobalStyles />
      <Navigation />
    </ARMprovider>
  );
}
