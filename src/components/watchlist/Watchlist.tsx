import React, {useState} from 'react';

import { DataTable } from '../dataTable/DataTable';
import { FilterBar } from '../filterBar/FilterBar';

import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';

export const Watchlist = (props: any): React.ReactElement => {
  const watchlistTags: any[] = [];

  // aggregate array of unique tags for watchlist
  props.list?.stocks.forEach((stock: any) => {
    return stock.tags.forEach((tag: any) => {
      if (watchlistTags.indexOf(tag) === -1) {
        return watchlistTags.push(tag);
      }
    })
  })

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
      <FilterBar filters={watchlistTags}></FilterBar>
      <DataTable data={props.list?.stocks}></DataTable>
    </>
  );

  // TODO: rename watchlist feature
  const [renameWatchlist, setRenameWatchlist] = useState<Boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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

      {props.list?.stocks.length > 0 ? activeState : zeroState}

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
            <p>This list containing {props.list?.stocks.length} investments will be deleted.</p>
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
