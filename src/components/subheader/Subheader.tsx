import React, {useState} from 'react';
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react';

import './Subheader.scss';

export const Subheader = (props: any): React.ReactElement => {
  const [watchlists, setWatchlists] = useState<any[]>();
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onCreateWatchlist = () => {
    const newWatchList = { uid: inputValue, name: inputValue, stocks: [] };
    let newArr = [...props.watchlists, newWatchList];

    props.watchlists.push(newWatchList);
    setWatchlists(newArr);
    props.onSelectWatchlist(newWatchList);
  };

  return (
    <>
      <div className="subheader">
        <Header as="h6">YOUR WATCHLISTS</Header>
        <div>
          {
            props.watchlists?.map((list: any) => (
              <Button key={list.uid} onClick={() => props.onSelectWatchlist(list)}>
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
  );
}
