import * as React from 'react';

import { DataTable } from '../dataTable/DataTable';
import { FilterBar } from '../filterBar/FilterBar';

import { Button, Header, Icon } from 'semantic-ui-react';

export const Watchlist = (props: any): React.ReactElement => {

  const watchlistTags: any[] = [];
  props.list?.stocks.map((stock: any) => {
    return stock.tags.map((tag: any) => {
      if (watchlistTags.indexOf(tag) === -1) {
        return watchlistTags.push(tag);
      }
    })
  })

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
    <>
      <Header as="h4">{props.list?.name}</Header>
      <FilterBar filters={watchlistTags}></FilterBar>
      <DataTable data={props.list?.stocks}></DataTable>
    </>
  )

  return (
    <>
      {props.list ? activeState : zeroState }
    </>
  )
}
