// React Dependencies
import React from 'react';

// Internal Dependencies
import { Footer } from './components/footer/Footer';
import { AppHeader } from './components/appHeader/AppHeader';
import { Main } from './components/main/Main';
import './App.scss';

export const App = (props:any) => {
  return (
    <>
      <AppHeader></AppHeader>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
