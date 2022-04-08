import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data'

ReactDOM.render(
  <React.StrictMode>
      <Beers beersList={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);