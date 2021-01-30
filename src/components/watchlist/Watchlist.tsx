import * as React from 'react';

import { DataTable } from '../dataTable/DataTable';

import { Button, Grid, Header, Icon } from 'semantic-ui-react';

export function Watchlist(props: any): React.ReactElement {

  const zeroState = (
    <div className="Text-align-center">
      <Icon name="chart line" size="massive"></Icon>
      <h4>Nothing in this watchlist yet</h4>
      <Button>
        <Icon name="plus"></Icon>
        Add Investments
      </Button>
    </div>
  )

  const activeState = (
    <DataTable title={props.list.name} data={props.list.stocks}></DataTable>
  )

  return (
    <>
      { props.list ? activeState : zeroState }
    </>
  )
}
