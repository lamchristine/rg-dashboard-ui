import * as React from 'react';
// import './Search.css';
import { Button, Input } from 'semantic-ui-react';

export function Search(): React.ReactElement {

  function handleSubmit() {
    console.log('submit')
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <Input
          action="Search"
          placeholder="Search"
          type="text"
          name="text"
        />
      </form>
    </>
  );
}
