import * as React from 'react';

import { Icon } from 'semantic-ui-react';

import './Pill.css'

export function Pill(props: any): React.ReactElement {

  return (
    <>
      <div className="Pill">{props.value}
        <Icon name="close"></Icon>
      </div>
    </>
  )
};
