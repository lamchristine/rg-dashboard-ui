import * as React from 'react';
import { Avatar } from '../avatar/Avatar';
import logo from '../../logo.svg';

import './Header.css';

export function Header(): React.ReactElement {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Avatar></Avatar>
      </div>
    </>
  );
}
