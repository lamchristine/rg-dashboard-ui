import * as React from 'react';

import { Icon } from 'semantic-ui-react';

import './Pill.scss'

export const Pill = (props: any): React.ReactElement => {
  return (
    <>
      <div className="pill">{props.value}
        <Icon name="close"></Icon>
      </div>
    </>
  );
}
