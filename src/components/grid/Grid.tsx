import * as React from 'react';
import { Table } from 'semantic-ui-react'

export function Grid(props: any): React.ReactElement {

  return (
    <>
      <h4>{props.title}</h4>
      <Table basic padded singleLine selectable>
       <Table.Body>
         <Table.Row>
           <Table.Cell>John Lilki</Table.Cell>
           <Table.Cell>September 14, 2013</Table.Cell>
           <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
           <Table.Cell>No</Table.Cell>
         </Table.Row>
         <Table.Row>
           <Table.Cell>Jamie Harington</Table.Cell>
           <Table.Cell>January 11, 2014</Table.Cell>
           <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
           <Table.Cell>Yes</Table.Cell>
         </Table.Row>
         <Table.Row>
           <Table.Cell>Jill Lewis</Table.Cell>
           <Table.Cell>May 11, 2014</Table.Cell>
           <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
           <Table.Cell>Yes</Table.Cell>
         </Table.Row>
       </Table.Body>
     </Table>
   </>
  )
}
