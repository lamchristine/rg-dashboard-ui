import * as React from 'react';

// import { DataTable } from './components/dataTable/DataTable';
import { Header } from './components/header/Header';
// import { Search } from './components/search/Search';
import { Subheader } from './components/subheader/Subheader';
import { Watchlist } from './components/watchlist/Watchlist';

// import { Segment, Grid } from 'semantic-ui-react';


// import { MOST_ACTIVE } from './seed/mostActive.constant';

import './App.css';

function App() {


  // const stockData = MOST_ACTIVE;
  const watchlists = [
    {
      name: 'Watchlist A',
      id: 1,
      stocks: [
        {
          ticker: 'FB',
          ticker_color: 'rgb(98, 124, 182)',
          name: 'Facebook, Inc. Common Stock',
          current_price: 272.14,
          price_down: 9.91,
          price_down_percentage: 3.51
        },
        {
          ticker: 'NVDA',
          ticker_color: 'rgb(91, 144, 0)',
          name: 'NVIDIA Corporation',
          current_price: 516.71,
          price_down: 20.70,
          price_down_percentage: 3.85
        },
        {
          ticker: 'AMC',
          ticker_color: 'rgb(0, 0, 0)',
          name: 'AMC Entertainment',
          current_price: 19.90,
          price_up: 14.94,
          price_up_percentage: 301.21
        }
      ]
    },
    {
      name: 'Watchlist B',
      id: 2,
      stocks: [
        {
          ticker: 'TSLA',
          ticker_color: 'rgb(232, 32, 38)',
          name: 'Tesla',
          current_price: 864.16,
          price_down: 18.93,
          price_down_percentage: 2.14
        },
        {
          ticker: 'MSFT',
          ticker_color: 'rgb(170, 121, 0)',
          name: 'Microsoft Corporation',
          current_price: 232.90,
          price_up: 0.57,
          price_up_percentage: 0.25
        }
      ]
    }
  ]
  const [watchlist, setWatchlist] = React.useState(watchlists[0]);

  return (
    <>
      <Header></Header>
      <Subheader watchlists={watchlists} handleClick={setWatchlist}></Subheader>
      <div className="Container-wrapper">
        <Watchlist list={watchlist}></Watchlist>
      </div>
    </>
  );
}

export default App;
