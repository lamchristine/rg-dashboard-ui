import * as React from 'react';

import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { Grid } from './components/grid/Grid'

import { MOST_ACTIVE } from './seed/mostActive.constant';

import './App.css';

function App() {
  const stockData = MOST_ACTIVE;

  return (
    <>
      <Header></Header>
      <div className="Container-wrapper">
        <Search></Search>
        <div className="Grid">
          <Grid title="Most Active" gridData={stockData}></Grid>
        </div>
      </div>
    </>
  );
}

export default App;
