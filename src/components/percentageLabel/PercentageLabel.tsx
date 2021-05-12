import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import './PercentageLabel.css';

export const PercentageLabel = (props: any): React.ReactElement => {
  const { percent_delta } = props;
  const downArrow = <Icon name="arrow down" />
  const upArrow = <Icon name="arrow up" />
  let percent_delta_display;
  let percent_delta_className;
  let percent_delta_icon;

  switch(true) {
    case percent_delta === 0:
      percent_delta_display = '0%';
      percent_delta_className = 'Label--grey'
      break;
    case percent_delta > 0:
      percent_delta_icon = upArrow;
      percent_delta_display = (percent_delta * 100).toFixed(2) + '%';
      percent_delta_className = 'Label--green'
      break;
    case percent_delta < 0:
      percent_delta_icon = downArrow;
      percent_delta_display = (percent_delta * 100).toFixed(2).toString().slice(1) + '%';
      percent_delta_className = 'Label--red'
      break;
  }

  return (
    <>
      <div className={percent_delta_className}>
        {percent_delta_icon}
        {percent_delta_display}
      </div>
    </>
  )
}
