// React Dependencies
import React, { useEffect, useState } from 'react';

// Third Party Dependencies
import axios from 'axios';
import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';

// Internal Dependencies
import { DataTable } from '../dataTable/DataTable';
import { FilterBar } from '../filterBar/FilterBar';

export const Watchlist = (props: any): React.ReactElement => {
  const watchlist = props.list;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // TODO: rename watchlist feature
  const [renameWatchlist, setRenameWatchlist] = useState<Boolean>(false);
  const [stocks, setStocks] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);

  // Get stocks for given watchlist
  useEffect(() => {
    if (watchlist) {
      const apiUrl = 'https://rg-dashboard-api.herokuapp.com/api/v1/watchlists/' + watchlist?.uid;

      axios.get(apiUrl)
        .then((response) => {
          const stocks = response.data.watchlist.stocks;
          setStocks(stocks);
        })
        .catch((err) => {
          // TODO: display error state
          setStocks([]);
        })
    } else {
      setStocks([]);
    }
  }, [watchlist]);

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
  }, [stocks]);

  // Active state view (has investments in watchlist)
  const activeState = (
    <>
      <FilterBar filters={tags}></FilterBar>
      <DataTable data={stocks} onDeleteStock={(deletedStock: any) => deleteStock(deletedStock)}></DataTable>
    </>
  );

  // Delete stock - TODO: DELETE request to delete a stock
  const deleteStock = (deletedStock: any) => {
    const updatedStocks = stocks?.filter((stock: any) => stock.ticker !== deletedStock.ticker);
    setStocks(updatedStocks);
  };

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

  return (
    <>
      <div className="display-flex">
        <Header as="h4">{watchlist?.name}</Header>
        <Dropdown
          button
          floating
          className='icon'
          direction='right'
          icon='ellipsis vertical'
          aria-label="menu"
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
            <h3>Delete {watchlist?.name} watchlist?</h3>
            <p>This list containing {stocks?.length} investments will be deleted.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={() => setOpenDeleteModal(false)}>
            Cancel
          </Button>
          <Button primary onClick={() => {
              setOpenDeleteModal(false);
              props.onDeleteWatchlist(watchlist);
            }}
          >
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
