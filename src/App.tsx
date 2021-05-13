import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Subheader } from './components/subheader/Subheader';
import { Watchlist } from './components/watchlist/Watchlist';

import './App.scss';

export const App = (props:any) => {
  const [watchlists, setWatchlists] = useState<any[]>();
  const [watchlist, setWatchlist] = useState<any[]>();

  useEffect(() => {
    let loading = true;
    const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists';

    axios.get(apiUrl)
      .then((response) => {
        if (loading) {
          const watchlists = response.data.watchlists;
          console.log(watchlists)

          setWatchlists(watchlists);
          setWatchlist(watchlists[0])
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
      return () => {
        loading = false;
    }
  }, [])

  const deleteWatchlist = (list: any) => {
    const newWatchlistArr = watchlists?.filter((watchlist) => watchlist !== list);
    setWatchlists(newWatchlistArr);
    if(newWatchlistArr) {
      setWatchlist(newWatchlistArr[0]);
    } else {
      setWatchlist([]);
    }
  }

  return (
    <>
      <Header></Header>
      <Subheader watchlists={watchlists} onSelectWatchlist={setWatchlist}></Subheader>
      <div className="Container-wrapper">
        <Watchlist list={watchlist} onDeleteWatchlist={(list: any) => deleteWatchlist(list)}></Watchlist>
      </div>
      <Footer></Footer>
    </>
  );
}
