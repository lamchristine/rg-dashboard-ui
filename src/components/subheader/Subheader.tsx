import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react';

import './Subheader.scss';

export const Subheader = ({onSelectWatchlist} : {onSelectWatchlist: any}): React.ReactElement => {
  const [watchlists, setWatchlists] = useState<any[]>();

  // let watchlistBtnArr: any[];

  useEffect(() => {
    let loading = true;
    const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists';

    axios.get(apiUrl)
      .then((response) => {
        if (loading) {
          const watchlists = response.data.watchlists;

          const watchlistBtns = watchlists.map((list: any) =>
            <Button key={list.uid} onClick={() => onSelectWatchlist(list)}>
              <Icon name="list alternate"></Icon>{list.name}
            </Button>
          );
          setWatchlists(watchlists);

          onSelectWatchlist(watchlists[0])
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
      return () => {
        loading = false;
    }
  }, [])

  const [open, setOpen] = useState(false)


  const onCreateWatchlist = () => {
    if (watchlists) {
      const newWatchList = { name: inputValue, uid: inputValue }
      let newArr = [...watchlists, newWatchList]
      setWatchlists(newArr);
      onSelectWatchlist(newWatchList);
    }
  }

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <div className="Subheader">
        <Header as="h6">YOUR WATCHLISTS</Header>
        <div>
          {watchlists?.map((list: any) => (
            <Button key={list.uid} onClick={() => onSelectWatchlist(list)}>
              <Icon name="list alternate"></Icon>{list.name}
            </Button>
          ))
          }
          {/*<Button basic ><Icon name="plus"></Icon>New watchlist</Button>*/}
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
                  onCreateWatchlist();
                }}
              >
                Done
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    </>
  )
}
