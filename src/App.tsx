import * as React from 'react';
// import logo from './logo.svg';

import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { Grid } from './components/grid/Grid'
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className="Container-wrapper">
        <Search></Search>
        <div className="Grid">
          <Grid title="You may be interested in"></Grid>
        </div>
      </div>
      {  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      }
    </>
  );
}

export default App;
