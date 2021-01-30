import * as React from 'react';
import { Label, Icon, Table } from 'semantic-ui-react';
import './DataTable.css';

export function DataTable(props: any): React.ReactElement {
  const downArrow = <Icon name="arrow down" />
  const upArrow = <Icon name="arrow up" />

  const gridRows = props.data.map((stock: any) =>
    <Table.Row>
      {/* Ticker label */}
      <Table.Cell className="Ticker-label" width="1">
        <Label
          horizontal
          size="small"
          style={{background: stock.ticker_color}}
        >
          {stock.ticker}
        </Label>
      </Table.Cell>

      {/* Ticker name */}
      <Table.Cell>
        {stock.name}
      </Table.Cell>

      {/* Current price */}
      <Table.Cell textAlign="right">
        ${stock.current_price}
      </Table.Cell>

      {/* Price gain/lose */}
      <Table.Cell
        className={stock.price_up ? 'Grid-text--green' : 'Grid-text--red'}
        textAlign="right"
        width="2"
      >
        ${stock.price_up ? stock.price_up : stock.price_down}
      </Table.Cell>

      {/* Price gain/lose in percentage */}
      <Table.Cell
        className={stock.price_up ? 'Grid-text--green Right-align' : 'Grid-text--red Right-align'}
      >
        <div className={stock.price_up_percentage ? 'Grid-text--green-background' : 'Grid-text--red-background'}>
          {stock.price_up ? upArrow : downArrow}
          {stock.price_up ? stock.price_up_percentage : stock.price_down_percentage}%
        </div>
      </Table.Cell>

      {/* Remove from watchlist icon */}
      <Table.Cell textAlign="center" width="2" >
        <Icon circular name="close" />
      </Table.Cell>
    </Table.Row>
  );

  return (
    <>
      <h4>{props.title}</h4>
      <Table basic="very" singleLine selectable>
       <Table.Body>
        {gridRows}
       </Table.Body>
     </Table>
   </>
 );
}
