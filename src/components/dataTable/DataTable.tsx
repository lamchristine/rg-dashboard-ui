// React Dependencies
import React from 'react';

// Third Party Dependencies
import { Button, Label, Icon, Table } from 'semantic-ui-react';
import { PercentageLabel } from '../percentageLabel/PercentageLabel';

// Internal Dependencies
import './DataTable.scss';

export const DataTable = (props: any): React.ReactElement => {
  const stocks = props.data;
  // Build table rows
  const tableRows = stocks?.map((stock: any) => {
    let price_delta = parseFloat((stock.open_price * stock.delta).toFixed(2));
    let price_delta_display;
    let price_delta_className;

    switch(true) {
      case price_delta === 0:
        price_delta_display = '-';
        price_delta_className = 'grid-text--grey';
        break;
      case price_delta > 0:
        price_delta_display = '+$' + price_delta;
        price_delta_className = 'grid-text--green';
        break;
      case price_delta < 0:
        price_delta_display = '-$' + price_delta.toString().slice(1);
        price_delta_className = 'grid-text--red';
        break;
    };

    return (
      <Table.Row key={stock.ticker}>
        {/* Ticker label */}
        <Table.Cell className="ticker-label" width="1">
        <div className="label-wrapper">
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
        <Table.Cell className="right-align">
          <PercentageLabel
            percent_delta={stock.delta}
          ></PercentageLabel>
        </Table.Cell>

        {/* Remove from watchlist icon */}
        <Table.Cell textAlign="center" width="2">
          <Button
            basic
            circular
            icon
            className="remove-icon"
            size="small"
            onClick={() => props.onDeleteStock(stock)}
            aria-label="delete"
          >
            <Icon name="close"/>
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  })

  return (
    <>
      <h4>{props.title}</h4>
      <Table basic="very" singleLine selectable>
        <Table.Body>
          {tableRows}
        </Table.Body>
     </Table>
    </>
  );
}
