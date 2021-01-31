import * as React from 'react';

import { Pill } from '../pill/Pill';

import './FilterBar.css';

export function FilterBar(props: any): React.ReactElement {
  return (
    <>
      {props.filters.map((filter: any) => (
        <Pill key={filter} value={filter}></Pill>
      ))}
    </>
  )
};
