import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component2/style.css';

import './components/bootstrap.min.css';
// import './components/bootstrap.min.js';
// import './components/jquery.min.js';
import Test from './component2/test1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
