import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { DataTable } from '../dataTable/DataTable';
import { FilterBar } from '../filterBar/FilterBar';

import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';

export const Watchlist = (props: any): React.ReactElement => {
  const [stocks, setStocks] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  // TODO: rename watchlist feature
  const [renameWatchlist, setRenameWatchlist] = useState<Boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // Zero state view (no investments in watchlist)
  const zeroState = (
    <div className="text-align-center">
      <Icon name="chart line" size="massive"></Icon>
      <h4>Nothing in this watchlist yet</h4>
      <Button>
        <Icon name="plus"></Icon>
        Add Investments
      </Button>
    </div>
  );

  // Active state view (has investments in watchlist)
  const activeState = (
    <>
      <FilterBar filters={tags}></FilterBar>
      <DataTable data={stocks}></DataTable>
    </>
  );

  // Get stocks for given watchlist
  useEffect(() => {
    if (props.list) {
      const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists/' + props.list?.uid;

      axios.get(apiUrl)
        .then((response) => {
          const stocks = response.data.watchlist.stocks;
          setStocks(stocks);
        })
        .catch((err) => {
          console.log(err.response);
        })
    } else {
      setStocks([]);
    }
  }, [props.list])

  // Aggregate tags for stocks
  useEffect(() => {
      const watchlistTags: any[] = [];

      stocks.forEach((stock: any) => {
        return stock.tags.forEach((tag: any) => {
          if (watchlistTags.indexOf(tag) === -1) {
            return watchlistTags.push(tag);
          }
        })
      })
      setTags(watchlistTags);
  }, [stocks])

  return (
    <>
      <div className="display-flex">
        <Header as="h4">{props.list?.name}</Header>
          <Dropdown
            button
            floating
            className='icon'
            direction='right'
            icon='ellipsis vertical'
          >
          <Dropdown.Menu>
            <Dropdown.Item icon='pencil alternate' text='Rename' onClick={() => setRenameWatchlist(true)}/>
            <Dropdown.Item icon='trash alternate outline' text='Delete' onClick={() => setOpenDeleteModal(true)} />
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {stocks?.length > 0 ? activeState : zeroState}

      {/* Delete Watchlist Modal */}
      <Modal
        onClose={() => setOpenDeleteModal(false)}
        onOpen={() => setOpenDeleteModal(true)}
        open={openDeleteModal}
        size="mini"
      >
        <Modal.Content>
          <Modal.Description>
            <h3>Delete {props.list?.name} watchlist?</h3>
            <p>This list containing {stocks?.length} investments will be deleted.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={() => setOpenDeleteModal(false)}>
            Cancel
          </Button>
          <Button primary onClick={() => {
              setOpenDeleteModal(false);
              props.onDeleteWatchlist(props.list);
            }}
          >
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
