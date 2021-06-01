import * as React from 'react';

import { Label } from 'semantic-ui-react';
import { PercentageLabel } from '../percentageLabel/PercentageLabel';

import './Card.scss';

export const Card = (props: any): React.ReactElement => {
  const { current_price, name, ticker, ticker_color, delta } = props.stockData;

  return (
    <>
      <div className="card">
        <div className="label-wrapper">
          <Label
            horizontal
            size="small"
            style={{background: ticker_color}}
          >
            {ticker}
          </Label>
        </div>
        {name}
        <div className="card-footer">
          <div className="margin-b-sm bold">${current_price}</div>
          <PercentageLabel
            percent_delta={delta}
          ></PercentageLabel>
        </div>
      </div>
    </>
  );
}
