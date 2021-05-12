import * as React from 'react';
import { Input } from 'semantic-ui-react';

import './Search.scss';

export const Search = (): React.ReactElement => {

  function handleSubmit() {
    console.log('submit')
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <Input
          fluid
          placeholder="Search for stocks"
          type="text"
          name="text"
          icon="search"
          iconPosition="left"
          size="large"
        />
      </form>
    </>
  );
}
