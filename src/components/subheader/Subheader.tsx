import * as React from 'react';

import { Button, Header, Icon } from 'semantic-ui-react';

import './Subheader.css';

export const Subheader = (props: any): React.ReactElement => {
  const watchlists = props.watchlists.map((list: any) =>
    <Button key={list.id} onClick={() => props.handleClick(list)}>
      <Icon name="list alternate"></Icon>{list.name}
    </Button>
  );

  function handleClick(list: any) {

    console.log('click', list)
  }

  return (
    <>
      <div className="Subheader">
        <Header as="h6">YOUR WATCHLISTS</Header>
        <div>
          {watchlists}
          <Button basic><Icon name="plus"></Icon>New watchlist</Button>
        </div>
      </div>
    </>
  )
}
