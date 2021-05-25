import * as React from 'react';
import { Avatar } from '../avatar/Avatar';
import { Search } from '../search/Search';
import logo from '../../logo.svg';

import './Header.scss';

export const Header = (): React.ReactElement => {
  return (
    <>
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Search></Search>
        <Avatar></Avatar>
      </div>
    </>
  );
}
