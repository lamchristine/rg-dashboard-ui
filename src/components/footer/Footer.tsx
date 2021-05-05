import * as React from 'react';

import { Card } from '../card/Card';
import { Header } from 'semantic-ui-react';
import './Footer.css';

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
      <div className="Footer">
        <Header
          as="h4"
          content='Discover more'
          subheader='You may be interested in'
        />
        <div className="Card-wrapper">
          {cards}
        </div>
      </div>
    </>
  )
}
