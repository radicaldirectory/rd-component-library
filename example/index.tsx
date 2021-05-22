import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { MeriButton } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      Hello
      <MeriButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
