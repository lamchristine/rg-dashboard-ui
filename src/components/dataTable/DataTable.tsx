import * as React from 'react';
import { Label, Icon, Table } from 'semantic-ui-react';
import { PercentageLabel } from '../percentageLabel/PercentageLabel';
import './DataTable.css';

export const DataTable = (props: any): React.ReactElement => {

  const gridRows = props.data.map((stock: any) => {

  let price_delta = parseFloat((stock.open_price * stock.delta).toFixed(2));
  let price_delta_display;
  let price_delta_className;

  switch(true) {
    case price_delta === 0:
      price_delta_display = '-';
      price_delta_className = 'Grid-text--grey'
      break;
    case price_delta > 0:
      price_delta_display = '+$' + price_delta;
      price_delta_className = 'Grid-text--green'
      break;
    case price_delta < 0:
      price_delta_display = '-$' + price_delta.toString().slice(1);
      price_delta_className = 'Grid-text--red'
      break;
  }

  return (
    <Table.Row key={stock.ticker}>
      {/* Ticker label */}
      <Table.Cell className="Ticker-label" width="1">
      <div className="Label-wrapper">
        <Label
          horizontal
          size="small"
          style={{background: stock.ticker_color}}
        >
          {stock.ticker}
        </Label>
        </div>
      </Table.Cell>

      {/* Ticker name */}
      <Table.Cell>
        {stock.company_name}
      </Table.Cell>

      {/* Current price */}
      <Table.Cell textAlign="right">
        ${stock.current_price}
      </Table.Cell>

      {/* Price gain/lose */}
      <Table.Cell
        className={price_delta_className}
        textAlign="right"
        width="3"
      >
        {price_delta_display}
      </Table.Cell>

      {/* Price gain/lose in percentage */}
      <Table.Cell className="Right-align">
        <PercentageLabel
          percent_delta={stock.delta}
        ></PercentageLabel>
      </Table.Cell>

      {/* Remove from watchlist icon */}
      <Table.Cell textAlign="center" width="2" >
        <Icon circular name="close" />
      </Table.Cell>
    </Table.Row>
  )
});

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
