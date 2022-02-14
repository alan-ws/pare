/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Home } from '@pare/ui';

const App = () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
