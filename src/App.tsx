import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Subheader } from './components/subheader/Subheader';
import { Watchlist } from './components/watchlist/Watchlist';

import './App.css';

export const App = () => {
  const [watchlist, setWatchlist] = useState();

  return (
    <>
      <Header></Header>
      <Subheader onSelectWatchlist={setWatchlist}></Subheader>
      <div className="Container-wrapper">
        <Watchlist list={watchlist}></Watchlist>
      </div>
      <Footer></Footer>
    </>
  );
}
