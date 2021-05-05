import * as React from 'react';

import { Icon } from 'semantic-ui-react';

import './PercentageLabel.css';

export const PercentageLabel = (props: any): React.ReactElement => {

  const { price_up_percentage, price_up, price_down_percentage } = props;
  const downArrow = <Icon name="arrow down" />
  const upArrow = <Icon name="arrow up" />

  return (
    <>
      <div className={price_up_percentage ? 'Label--green' : 'Label--red'}>
        {price_up ? upArrow : downArrow}
        {price_up ? price_up_percentage : price_down_percentage}%
      </div>
    </>
  )
}
