import * as React from 'react';
import { Input } from 'semantic-ui-react';

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
