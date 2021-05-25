import * as React from 'react';

import { Card } from '../card/Card';
import { Header } from 'semantic-ui-react';
import './Footer.scss';

import { MOST_ACTIVE } from '../../seed/mostActive.constant';

export const Footer = (): React.ReactElement => {
  const tickerData = MOST_ACTIVE;
  const cards = tickerData.map((stock: any) =>
    <Card
      key={stock.ticker}
      stockData={stock}
    ></Card>
  );

  return (
    <>
      <div className="footer">
        <Header
          as="h4"
          content='Discover more'
          subheader='You may be interested in'
        />
        <div className="card-wrapper">
          {cards}
        </div>
      </div>
    </>
  );
}
