import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Subheader } from './components/subheader/Subheader';
import { Watchlist } from './components/watchlist/Watchlist';

import './App.scss';

export const App = (props:any) => {
  const [watchlists, setWatchlists] = useState<any[]>();
  const [watchlist, setWatchlist] = useState<any[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists';

    axios.get(apiUrl)
      .then((response) => {
          const watchlists = response.data.watchlists;
          setWatchlists(watchlists);
          setWatchlist(watchlists[0]);
          setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      })
  }, [])

  const deleteWatchlist = (list: any) => {
    const newWatchlistArr = watchlists?.filter((watchlist) => watchlist !== list);
    setWatchlists(newWatchlistArr);

    // Select first watchlist after deleting
    newWatchlistArr ? setWatchlist(newWatchlistArr[0]) : setWatchlist([])
  }

  return (
    <>
      <Header></Header>
      <Subheader watchlists={watchlists} onSelectWatchlist={setWatchlist}></Subheader>
      <div className="container-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Watchlist list={watchlist} onDeleteWatchlist={(list: any) => deleteWatchlist(list)}></Watchlist>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
