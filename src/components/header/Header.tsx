import * as React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Search } from '../search/Search';
import logo from '../../logo.svg';

import './Header.css';

export function Header(): React.ReactElement {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search></Search>
        <Avatar></Avatar>
      </div>
    </>
  );
}
