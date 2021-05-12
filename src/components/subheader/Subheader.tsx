import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, Header, Icon } from 'semantic-ui-react';

import './Subheader.css';

export const Subheader = (props: any): React.ReactElement => {
  const [watchlistBtns, setWatchlistBtns] = useState();

  useEffect(() => {
    let loading = true;
    const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists';

    axios.get(apiUrl)
      .then((response) => {
        if (loading) {
          const watchlists = response.data.watchlists;

          const watchlistBtns = watchlists.map((list: any) =>
            <Button key={list.uid} onClick={() => props.onSelectWatchlist(list)}>
              <Icon name="list alternate"></Icon>{list.name}
            </Button>
          );
          setWatchlistBtns(watchlistBtns);

          props.onSelectWatchlist(watchlists[0])
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
      return () => {
        loading = false;
    }
  }, [])

  return (
    <>
      <div className="Subheader">
        <Header as="h6">YOUR WATCHLISTS</Header>
        <div>
          {watchlistBtns}
          <Button basic><Icon name="plus"></Icon>New watchlist</Button>
        </div>
      </div>
    </>
  )
}
