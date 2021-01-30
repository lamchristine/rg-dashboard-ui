import * as React from 'react';

import { Card } from '../card/Card';
import { Header } from 'semantic-ui-react';
import './Footer.css';

export function Footer(): React.ReactElement {

  return (
    <>
      <div className="Footer">
        <Header
          as="h4"
          content='Discover more'
          subheader='You may be interested in'
        />
        <Card></Card>
      </div>
    </>
  )
}
