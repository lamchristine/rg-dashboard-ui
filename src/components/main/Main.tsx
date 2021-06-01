// React Dependencies
import React, { useEffect, useState } from 'react';

// Third Party Dependencies
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react';
import axios from 'axios';

// Internal Dependencies
import { Watchlist } from '../watchlist/Watchlist';
import './Main.scss';

export const Main = (): React.ReactElement => {
  const [currentWatchlist, setCurrentWatchlist] = useState<any>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [watchlists, setWatchlists] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists';

    axios.get(apiUrl)
      .then((response) => {
          const watchlists = response.data.watchlists;
          setWatchlists(watchlists);
          setCurrentWatchlist(watchlists[0]);
          setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      })
  }, []);

  // Create watchlist - TODO: POST request to create watchlist
  const createWatchlist = () => {
    const newWatchList = { uid: inputValue, name: inputValue };
    let newArr = [...watchlists, newWatchList];
    setWatchlists(newArr);
    setCurrentWatchlist(newWatchList);
  };

  // Delete watchlist
  const deleteWatchlist = (list: any) => {
    const newWatchlistArr = watchlists?.filter((watchlist) => watchlist !== list);
    setWatchlists(newWatchlistArr);

    // Select first watchlist after deleting
    newWatchlistArr ? setCurrentWatchlist(newWatchlistArr[0]) : setCurrentWatchlist({});
  };

  return (
    <>
      <div className="subheader">
        <Header as="h6">YOUR WATCHLISTS</Header>
        <div>
          {
            watchlists?.map((list: any) => (
              <Button key={list.uid} onClick={() => setCurrentWatchlist(list)}>
                <Icon name="list alternate"></Icon>{list.name}
              </Button>
            ))
          }
          {/* New Watchlist Modal */}
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button basic><Icon name="plus"></Icon>New watchlist</Button>}
            size="mini"
          >
            <Modal.Content>
              <Modal.Description>
                <h3>Create watchlist</h3>
                  <Input
                    focus
                    placeholder='Watchlist name'
                    onChange={(e) => setInputValue(e.target.value)}
                  />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button basic onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button primary onClick={() => {
                  setOpen(false);
                  createWatchlist();
                }}
              >
                Done
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>

      {/* Watchlist Section */}
      <div className="container-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Watchlist list={currentWatchlist} onDeleteWatchlist={(list: any) => deleteWatchlist(list)}></Watchlist>
        )}
      </div>
    </>
  );
}
