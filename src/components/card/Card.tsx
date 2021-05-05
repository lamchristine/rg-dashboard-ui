import * as React from 'react';

import { Label, Icon, Table } from 'semantic-ui-react';
import { PercentageLabel } from '../percentageLabel/PercentageLabel';

import './Card.css';

export const Card = (props: any): React.ReactElement => {

  const {current_price, name, ticker, ticker_color, price_up_percentage, price_up, price_down_percentage, price_down} = props.stockData;

  return (
    <>
      <div className="Card">
        <div className="Label-wrapper">
          <Label
            horizontal
            size="small"
            style={{background: ticker_color}}
          >
            {ticker}
          </Label>
        </div>
        {name}
        <div className="Card-Footer">
          <div className="margin-b-sm bold">${current_price}</div>
          <PercentageLabel
            price_up={price_up}
            price_up_percentage={price_up_percentage}
            price_down={price_down}
            price_down_percentage={price_down_percentage}
          ></PercentageLabel>
        </div>
      </div>
    </>
  )
};
