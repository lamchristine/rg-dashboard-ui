import React, {useState, useEffect} from 'react';

import { DataTable } from '../dataTable/DataTable';
import { FilterBar } from '../filterBar/FilterBar';

import { Button, Header, Icon, Dropdown, Menu, Modal } from 'semantic-ui-react';

export const Watchlist = (props: any): React.ReactElement => {
console.log(props)
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
      <FilterBar filters={watchlistTags}></FilterBar>
      <DataTable data={props.list?.stocks}></DataTable>
    </>
  )

  const editWatchlistOptions = [
    {
      key: 'rename',
      text: 'Rename',
      value: 'rename'
    },
    {
      key: 'delete',
      text: 'Delete',
      value: 'delete'
    }
  ]
  const [renameWatchlist, setRenameWatchlist] = useState<Boolean>(false);

  // useEffect(() => {
  //     console.log(renameWatchlist)
  //   if (renameWatchlist) {
  //
  //   }
  // },[renameWatchlist]
  // );

  const [openDeleteModal, setOpenDeleteModal] = useState(false)



  return (
    <>
      <div className="Display-flex">
        <Header as="h4">{props.list?.name}</Header>
          <Dropdown
            icon='ellipsis vertical'
            floating
            button
            className='icon'
            direction='right'
          >
          <Dropdown.Menu>
            <Dropdown.Item icon='pencil alternate' text='Rename' onClick={() => setRenameWatchlist(true)}/>
            <Dropdown.Item icon='trash alternate outline' text='Delete' onClick={() => setOpenDeleteModal(true)} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {props.list?.stocks.length > 0 ? activeState : zeroState}

      <Modal
        onClose={() => setOpenDeleteModal(false)}
        onOpen={() => setOpenDeleteModal(true)}
        open={openDeleteModal}
        size="mini"
      >
        <Modal.Content>
          <Modal.Description>
            <h3>Delete this watchlist?</h3>
            <p>This list containing {props.list?.stocks.length} investments will be deleted.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={() => setOpenDeleteModal(false)}>
            Cancel
          </Button>
          <Button primary onClick={() => {
              setOpenDeleteModal(false);
            }}
          >
            Done
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}
