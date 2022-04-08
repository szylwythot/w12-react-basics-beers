import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data'

console.log(data.logo);

ReactDOM.render(
  <React.StrictMode>
      <Beers />
  </React.StrictMode>,
  document.getElementById('root')
);