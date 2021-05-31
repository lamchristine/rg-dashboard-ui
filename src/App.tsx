// React Dependencies
import React, { useEffect, useState } from 'react';

// Third Party Dependencies
import axios from 'axios';

// Internal Dependencies
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Subheader } from './components/subheader/Subheader';
import { Watchlist } from './components/watchlist/Watchlist';
import './App.scss';

export const App = (props:any) => {
  const [isLoading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState<any[]>();
  const [watchlists, setWatchlists] = useState<any[]>();

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
  }, []);

  // Delete watchlist
  const deleteWatchlist = (list: any) => {
    const newWatchlistArr = watchlists?.filter((watchlist) => watchlist !== list);
    setWatchlists(newWatchlistArr);

    // Select first watchlist after deleting
    newWatchlistArr ? setWatchlist(newWatchlistArr[0]) : setWatchlist([])
  };

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
